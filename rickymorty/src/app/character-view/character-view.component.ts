import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private servicioService: ServicioService,
    private titleService: Title
  ) { }

  character: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.servicioService.getPersonaje(id).subscribe(
      (response) => {
        this.character = response;
        this.titleService.setTitle(this.character.name);
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    );
  }

  charactersView(): void {
    this._router.navigate(['/characters']);
  }

  editCharacter(): void {
    this._router.navigate(['/edit-character', this.character.id]);
  }

  deleteCharacter(): void {
    const confirmDelete = confirm('Are you sure you want to delete this character?');
    if (confirmDelete) {
      this.servicioService.eliminarPersonaje(this.character.id).subscribe(
        (response) => {
          alert('The character has been deleted successfully');
          this._router.navigate(['/characters']);
        },
        (error) => {
          alert('An error occurred while deleting the character');
        }
      );
    }
  }



}

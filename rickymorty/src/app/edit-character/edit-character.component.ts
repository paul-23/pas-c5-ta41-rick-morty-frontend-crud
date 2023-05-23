import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Chars } from 'src/model/chars.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  formError: string = '';
  updateSuccessfully: string = '';
  chars: Chars = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: ''
  };

  constructor(
    private servicio: ServicioService,
    private route: ActivatedRoute,
    private titleService: Title,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Edit Character');
    this.getCharacter();
  }

  characterView(): void {
    this._router.navigate(['/character/', this.chars.id]);
  }

  getCharacter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicio.getPersonaje(id).subscribe(
        response => {
          this.chars = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  updateChars(): void {
    this.formError = '';
    this.updateSuccessfully = '';

    if (!this.isFormValid()) {
      this.formError = 'Please fill in all fields.';
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicio.actualizarPersonaje(id, this.chars).subscribe(
        response => {
          console.log(response);
          this.updateSuccessfully = 'Character updated successfully';
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  isFormValid(): boolean {
    if (!this.chars.name || !this.chars.status || !this.chars.species || !this.chars.gender || !this.chars.origin) {
      return false;
    }
    return true;
  }
}

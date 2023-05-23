import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Chars } from 'src/model/chars.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  formError: string = '';
  sendSuccessfully: string = '';

  chars: Chars = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: ''
  };

  constructor(private servicio: ServicioService, private titleService: Title, private _router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Add Character');
  }

  charactersView(): void {
    this._router.navigate(['/characters']);
  }

  saveChars(): void {
    this.formError = '';

    if (!this.isFormValid()) {
      this.formError = 'Please fill in all fields.';
      return;
    }

    this.servicio.guardarPersonaje(this.chars).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this.newChar();
    this.sendSuccessfully = 'Character added successfully'
  }


  isFormValid(): boolean {
    if (!this.chars.name || !this.chars.status || !this.chars.species || !this.chars.gender || !this.chars.origin) {
      return false;
    }
    return true;
  }

  newChar(): void {
    this.chars = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: ''
    };
  }
}

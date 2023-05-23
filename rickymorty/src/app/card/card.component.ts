import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  title = 'Rick and Morty';

  characters:any = null;

  constructor(private servicioService: ServicioService, private titleService: Title) { }

  ngOnInit(){
    this.servicioService.listarPersonajes().subscribe(result => this.characters = result);
    this.titleService.setTitle('Characters');
  }

}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Rick and Morty";

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Rick & Morty');
  }

}

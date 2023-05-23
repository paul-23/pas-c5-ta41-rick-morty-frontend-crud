import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'character/:id', component: CharacterViewComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: 'edit-character/:id', component: EditCharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

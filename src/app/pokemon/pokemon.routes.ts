import { RouterModule, Routes } from '@angular/router'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const ROUTES: Routes = [
  { path: '', component: PokemonListComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: ''}
];


export const POKEMON_ROUTING = RouterModule.forChild(ROUTES)
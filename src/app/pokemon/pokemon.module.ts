import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { POKEMON_ROUTING } from './pokemon.routes';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule, 
    POKEMON_ROUTING
  ]
})
export class PokemonModule { }

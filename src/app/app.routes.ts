import { RouterModule, Routes } from '@angular/router'


const ROUTES: Routes = [
  { path: "home", loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: "**", pathMatch: 'full', redirectTo: 'home' }

]

export const APP_ROUTING = RouterModule.forRoot(ROUTES)


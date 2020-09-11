import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsPageComponent } from '../app/restaurants-page/restaurants-page.component';
import { FavoritesComponent } from '../app/favorites/favorites.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '',   redirectTo: '/restaurants', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: RestaurantsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

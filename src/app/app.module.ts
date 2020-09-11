import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';

import { HttpClientModule } from '@angular/common/http';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AngularTestService } from './services/angular-test.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RestaurantCardComponent,
    RestaurantsPageComponent,
    FavoritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AngularTestService],
  bootstrap: [AppComponent],
})
export class AppModule {}

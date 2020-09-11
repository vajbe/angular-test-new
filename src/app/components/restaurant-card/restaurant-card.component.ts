import { Component, OnInit } from '@angular/core';
import { AngularTestService } from '../../services/angular-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {
  restaurantData: any = [];
  constructor(private service: AngularTestService, private router: Router) {}

  ngOnInit(): void {
    this.loadData('toronto');

    this.service.cityItem.subscribe((city) => {
      this.service.clearRestaurantsData();
      this.loadData(city);
    });
  }

  saveFav(item) {
    item.isFav = true;
    this.service.addFavItem(item);
  }

  removeFavItem(item) {
    if (this.service.removeFavItem(item)) {
      item.isFav = false;
    }
  }
  loadData(city) {
    if (this.router.url == '/favorites') {
      this.restaurantData.restaurants = this.service.getFavData();
    } else {
      if (
        this.service.getRestaurantData() &&
        this.service.getRestaurantData().length === 0
      ) {
        this.service.getRestaurantsByCity(city).subscribe((res) => {
          this.service.setRestaurantData(res);
          this.restaurantData = this.service.getModifiedData();
        });
      } else {
        this.restaurantData = this.service.getModifiedData();
      }
      
    }
  }
}

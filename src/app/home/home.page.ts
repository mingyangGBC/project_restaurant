import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurants = this.restaurantService.getRestaurants();
  addedRestaurants = [];

  constructor(private route: Router, private restaurantService: RestaurantService) {
    for (const restaurant of this.restaurants) {
      if (restaurant.added) {
        this.addedRestaurants.push(restaurant);
      }
    }
  }

  aboutPage() {
    this.route.navigate(['/home']);
  }

}

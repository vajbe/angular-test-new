import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AngularTestService {
  data: any = [];
  favData = [];
  searchCityValue;
  private _listenToCity = new BehaviorSubject<String>("toronto");
  cityItem = this._listenToCity.asObservable();
  constructor(private httpClient: HttpClient) {}
  getRestaurantsByCity(city) {
    return this.httpClient.get(
      'http://opentable.herokuapp.com/api/restaurants?city=' + city
    );
  }

  changeCity(city){
    this._listenToCity.next(city);
  }

  setFavData(favData) {
    let favJSONData = JSON.stringify(favData);
    window.localStorage.setItem('favData', favJSONData);
  }

  getFavData() {
    let favJSONData = window.localStorage.getItem('favData');
    return JSON.parse(favJSONData);
  }

  setRestaurantData(resData) {
    let resJSONData = JSON.stringify(resData);
    window.localStorage.setItem('resData', resJSONData);
  }

  getRestaurantData() {
    let resJSONData = window.localStorage.getItem('resData');
    let resData = JSON.parse(resJSONData);
    if (resData) {
      return resData;
    }
    return [];
  }

  addFavItem(item) {
    this.favData.push(item);
    this.setFavData(this.favData);
    this.updateRestaurantData(item);
  }
  updateRestaurantData(item){
    let resData = this.getRestaurantData();
    for(let i=0;i<resData.restaurants.length;i++){
      if(resData.restaurants[i].id == item.id){
        resData.restaurants[i].isFav = true;
        this.setRestaurantData(resData);
        break;
      }
    }
  }

  removeFavItem(item) {
    let data = this.getFavData();
    let operationSuccess = false;
    for (let i = 0; i < data.length; i++) {
      if (item.id === data[i].id) {
        data.splice(i, 1);
        item.isFav = false;
        operationSuccess = true;
        break;
      }
    }
    this.favData = data;
    this.setFavData(this.favData);

    if (operationSuccess) {
      let resData = this.getRestaurantData();
      for (let i = 0; resData.restaurants && i < resData.restaurants.length; i++) {
        if (item.id === resData.restaurants[i].id) {
          resData.restaurants[i].isFav = false;
          this.setRestaurantData(resData);
          break;
        }
      }
      return true;
    }
    return false;
  }

  setSearchCityValue(value){
    this.searchCityValue = value;
  }

  clearRestaurantsData(){
    window.localStorage.removeItem("resData");
  }

  getModifiedData(){
    let resData = this.getRestaurantData();
    let favData = this.getFavData();
    for(let i=0; i<resData.restaurants.length;i++){
      for(let j=0; favData && j<favData.length; j++){
        if(resData.restaurants[i].id == favData[j].id){
          resData.restaurants[i].isFav = true;
        }
      }
    }
    return resData;
  }

}

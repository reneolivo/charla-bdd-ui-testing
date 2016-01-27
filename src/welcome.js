import {inject} from 'aurelia-framework';
import {CarsService} from './services/cars';

@inject(CarsService)
export class Welcome {
  cars = [];

  constructor(carService) {
    this.carService = carService;
  }

  activate() {
    this.carService
      .getAll()
      .then((cars) => {
        this.cars = cars;
      });
  }
}

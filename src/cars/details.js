import {inject} from 'aurelia-framework';
import {CarsService} from '../services/cars';

@inject(CarsService)
export class CarDetails {
  car = null;

  constructor(carService) {
    this.carService = carService;
  }

  activate(params) {
    return this.carService
      .getById(params.id)
      .then((car) => {
        this.car = car;
      });
  }
}

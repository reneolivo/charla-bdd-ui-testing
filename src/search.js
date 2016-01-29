import {inject} from 'aurelia-framework';
import {CarsService} from './services/cars';

@inject(CarsService)
export class Search {
  cars = [];

  constructor(carService) {
    this.carService = carService;
  }

  activate($params) {
    return this.carService
      .getById($params.model)
      .then((car) => {
        this.cars = [ car ];
      });
  }
}

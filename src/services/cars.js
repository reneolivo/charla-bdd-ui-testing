import {cars} from '../data/cars';

export class CarsService {
  constructor() {}

  getAll() {
    return new Promise((resolve, reject) => {
      resolve(cars);
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      let car = cars.filter((c) => c.id === id);
      if (car.length) return resolve(car[ 0 ]);
      return reject('not-found');
    });
  }
}

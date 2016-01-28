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
      let car = cars.filter((c) => parseInt(c.id, 10) === parseInt(id, 10));
      if (car.length) return resolve(car[ 0 ]);
      return reject('not-found');
    });
  }
}

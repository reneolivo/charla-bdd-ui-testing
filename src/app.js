export class App {
  configureRouter(config, router) {
    config.title = 'Awesome Rent-A-Car';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',  nav: true, title: 'Welcome' },
      { route: ['cars/:id'], moduleId: 'cars/details', title: 'Car Details' },
      { route: ['search'], moduleId: 'search', title: 'Search car' }
    ]);

    this.router = router;
  }
}

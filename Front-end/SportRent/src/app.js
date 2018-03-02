export class App {
configureRouter(config, router) {
  this.router = router;
  config.title = 'My Aurelia app';
  config.map([
    { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
    { route: 'users',            name: 'users',      moduleId: 'users/users', nav: true, title: 'Users' },
  ]);
  }
}

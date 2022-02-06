import LoadPersons from './LoadPersons';

class MyApp {
  constructor() {
    this.h1 = document.createElement('h1');
  }

  init() {
    this.h1.innerHTML = 'TEST';
    document.body.appendChild(this.h1);
    LoadPersons.loadAllPersons();
  }
}

export default new MyApp();

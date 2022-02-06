import HTTPService from './HTTPService';
import UpdateList from './UpdateList';

class LoadPersons {
  constructor() {}

  async loadAllPersons() {
    await HTTPService.request({
      path: '/people/',
    })
      .then((result) => UpdateList.updateList(result))
      .catch(console.log);
  }
}

export default new LoadPersons();

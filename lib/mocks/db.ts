import data from './petsData';

class Database {

  constructor() {}

  async getAll() {
    return Object.values(data);
  }

  async getOne(id) {
    return Object.values(data)[id];
  }
}

export default Database;
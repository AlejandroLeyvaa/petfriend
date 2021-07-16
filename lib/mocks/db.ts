import data from './petsData';

class Database {

  constructor() {}

  async getAll() {
    return Object.values(data);
  }

  async getOne(id) {
    return Object.values(data)[id - 1];
  }
}

export default Database;
import data from './petsData';

class Database {

  constructor() {}

  async getAll() {
    return Object.values(data);
  }
}

export default Database;
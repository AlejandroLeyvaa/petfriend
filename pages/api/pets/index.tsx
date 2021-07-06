import {IncomingMessage, ServerResponse } from 'http';
import DB from '../../../lib/mocks/db';

const allPets = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  console.log(allEntries);
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ data: allEntries, length}));
}


export default allPets;
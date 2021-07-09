import  {IncomingMessage, ServerResponse } from 'http';
import DB from '../../../lib/mocks/db';

const db = new DB();

const allPets = async (req: IncomingMessage, res: ServerResponse) => {
  const allEntries = await db.getAll();
  const length = allEntries.length;

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ data: allEntries, length}));
}

export default allPets;
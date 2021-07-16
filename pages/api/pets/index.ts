import { NextApiRequest, NextApiResponse } from 'next';
import DB from '../../../lib/mocks/db';

const db = new DB();

const allPets = async (req: NextApiRequest, res: NextApiResponse) => {
  const allEntries = await db.getAll();
  const length = allEntries.length;

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ data: allEntries, length}));
}

export default allPets;
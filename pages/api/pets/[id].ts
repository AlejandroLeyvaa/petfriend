
import { NextApiRequest, NextApiResponse } from 'next';
import DB from '../../../lib/mocks/db';

const db = new DB();

const onePet = async  (req: NextApiRequest, res: NextApiResponse) => {
  const petID = req.query.id as string;
  const pet = await db.getOne(petID);

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ "data": pet, "message": "One Pet retrieved"}));
}

export default onePet;
import UserController from '../controllers/users/UsersController';
import { ICreateUser } from '../../../interfaces/IUser';
import { NextApiRequest, NextApiResponse } from 'next';

const userController = new UserController();

function user (req: NextApiRequest, res: NextApiResponse) {
  const { body, method} = req;

  // IF Method is equal to
  method === 'POST' && userController.create(body);

  res.status(200).json({
    "Data": body,
    "Message": "User created",
  });
}

export default user;
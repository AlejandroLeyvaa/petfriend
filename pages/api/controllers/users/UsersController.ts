import { ICreateUser } from '../../../../interfaces/IUser';
import UserAdopter from '../../models/users/UserAdopter';
import { hashingPasword } from '../../../../utils/hashingPassword';

const userAddopter = new UserAdopter();

class UserController {

  async create(userData: ICreateUser) {
    const secretPassword = await hashingPasword(userData.userPassword);
    const userCreated = await userAddopter.createUser(userData, secretPassword);

    console.log({userCreated});

  }
}

export default UserController;




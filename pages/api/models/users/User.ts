import bcrypt from 'bcrypt';
import { ICreateUser, IUser, IUserLocation } from '../../../../interfaces/IUser';

class User implements IUser {
  public userID: number;

  public userName: string;
  public userLastname: string;
  public userEmail: string;
  public userPassword: string;
  public userLocation: IUserLocation;
  public userHashedPassword: string;

  async createUser(user: ICreateUser, hashPassword) {
    this.userName = user.userName;
    this.userLastname = user.userLastname;
    this.userEmail = user.userEmail;
    this.userPassword = hashPassword;
    return {
      userName: this.userName,
      userLastname: this.userLastname,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }
  }
}

export default User;

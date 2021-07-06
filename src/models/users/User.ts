interface IUser {
  userID: number;
  userName: string;
  userLastname: string;
  userEmail: string;
  userPassword: string;
  userLocation: IUserLaction;

}

interface IUserLaction {
  worldLocation: string;
  cordLocation: string;
}

class User implements IUser {
  public userID: number;
  public userName: string;
  public userLastname: string;
  public userEmail: string;
  public userPassword: string;
  public userLocation: IUserLaction;

}

export default User;

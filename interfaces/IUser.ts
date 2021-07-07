export interface IUser {
  userName: string;
  userLastname: string;
  userEmail: string;
  userPassword: string;
  userLocation: IUserLocation | null;
  createUser: (user: ICreateUser, callback: () => any) => void | null;
}

export interface ICreateUser {
  userName: string
  userLastname: string
  userEmail: string
  userPassword: string
}

export interface IUserLocation {
  worldLocation: string;
  cordLocation: string;
}

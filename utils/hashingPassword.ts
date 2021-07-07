import { ICreateUser } from '../interfaces/IUser';
import bcrypt from 'bcrypt';


export const hashingPasword = (password) => {
  return new Promise<boolean | string>(function (resolve, reject) {
    if(password) {
      bcrypt.hash(password, 10, function (err, hash: string) {
        resolve(hash);
      })
    }
  })
}
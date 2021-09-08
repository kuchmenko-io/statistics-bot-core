import { IUser } from "../../interfaces/user.interface";

export interface IUserFactory<TCreateUserPayload, TUser extends IUser<any, any>> {
  create(payload: TCreateUserPayload): TUser;
}

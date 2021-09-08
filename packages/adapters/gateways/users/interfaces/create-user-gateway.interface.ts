import { IUser } from "../../../../entities/interfaces/user.interface";

export interface ICreateUserGateway<TCreateUserPayload, TUser extends IUser<any, any>> {
  create(payload: TCreateUserPayload): Promise<TUser>;
}

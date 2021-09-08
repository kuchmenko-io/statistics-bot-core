import { IUser } from "../../../../entities/interfaces/user.interface";

export interface IFindAllUserGateway<TFindAllUserPayload, TUser extends IUser<any, any>> {
  findAll(payload: TFindAllUserPayload): Promise<Array<TUser>>;
}

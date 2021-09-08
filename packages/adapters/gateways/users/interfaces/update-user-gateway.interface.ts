import { IUser } from "../../../../entities/interfaces/user.interface";

export interface IUpdateUserGateway<TUpdateUserPayload, TUser extends IUser<any, any>> {
  update(payload: TUpdateUserPayload): Promise<TUser>;
}

import { IUser } from "../../../../entities/interfaces/user.interface";

export interface IFindUserGateway<TFindUserPayload, TUser extends IUser<any, any>> {
  find(payload: TFindUserPayload): Promise<TUser | null>;
}

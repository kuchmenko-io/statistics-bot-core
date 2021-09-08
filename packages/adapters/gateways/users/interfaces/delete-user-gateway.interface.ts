import { IUser } from "../../../../entities/interfaces/user.interface";

export interface IDeleteUserGateway<TDeleteUserGatewayPayload, TUser extends IUser<any, any>> {
  delete(payload: TDeleteUserGatewayPayload): Promise<TUser>;
}

import { IUser } from "../../../../entities/interfaces/user.interface";

export interface IFindByIdUserGateway<TUserId, TUser extends IUser<any, any>> {
  findById(id: TUserId): Promise<TUser | null>;
}

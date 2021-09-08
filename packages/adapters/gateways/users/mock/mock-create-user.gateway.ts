import { ICreateUserGateway } from "../interfaces/create-user-gateway.interface";
import { IUser } from "../../../../entities/interfaces/user.interface";
import { IUserFactory } from "../../../../entities/factories/interfaces/user-factory.interface";

class MockCreateUserPayload {
}

export class MockCreateUserGateway implements ICreateUserGateway<MockCreateUserPayload, IUser<any, any>> {
  constructor(
    private readonly userFactory: IUserFactory<MockCreateUserPayload, IUser<any, any>>
  ) {
  }
  
  public create(payload: MockCreateUserPayload): Promise<IUser<any, any>> {
    return Promise.resolve(this.userFactory.create(payload))
  }
  
}

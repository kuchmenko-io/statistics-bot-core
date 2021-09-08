import { IMetricUnit } from "./metric-unit.interface";
import { IUser } from "./user.interface";

export interface IMetric {
  id: string;
  
  getCreator(): IUser<IMetric, IMetricUnit<any, any>>;
}

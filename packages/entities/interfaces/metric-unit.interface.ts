import { IUser } from "./user.interface";
import { IMetric } from "./metric.interface";

export interface IMetricUnit<TValue, TMetadata, TMetric extends IMetric> {
  id: string;
  
  getCreator(): IUser<TMetric, IMetricUnit<TValue, TMetadata, TMetric>>;
  
  getValue(): TValue;
  
  getMetadata(): TMetadata;
}


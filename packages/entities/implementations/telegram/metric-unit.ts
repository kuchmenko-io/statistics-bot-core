import Metric from "./metric";
import { IMetricUnit } from "../../interfaces/metric-unit.interface";
import User from "./user";

export default class MetricUnit implements IMetricUnit<string, Object> {
  private creator: User;
  public metric: Metric;
  private value: string;
  public id: string;
  
  public getCreator(): User {
    return this.creator;
  }
  
  public getMetadata(): Object {
    return {};
  }
  
  public getValue(): string {
    return this.value;
  }
  
  
  constructor(creator: User, metric: Metric, value: string, id: string) {
    this.creator = creator;
    this.metric = metric;
    this.value = value;
    this.id = id;
  }
}

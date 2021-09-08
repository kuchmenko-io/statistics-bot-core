import { IMetric } from "../../interfaces/metric.interface";
import Source from "./source";
import User from "./user";

enum MetricTypeEnum {
  TAG = "TAG",
  MENTION = "MENTION",
  MESSAGE = "MESSAGE",
}

export default class Metric implements IMetric {
  public id: string;
  public source: Source;
  public creator: User;
  public type: MetricTypeEnum;
  public value: string;
  
  public getCreator(): User {
    return this.creator;
  }
  
  constructor(id: string, source: Source, creator: User, type: MetricTypeEnum, value: string) {
    this.id = id;
    this.source = source;
    this.creator = creator;
    this.type = type;
    this.value = value;
  }
}

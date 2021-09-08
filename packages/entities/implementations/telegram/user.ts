import Metric from "./metric";
import MetricUnit from "./metric-unit";
import { IUser } from "../../interfaces/user.interface";

export default class User implements IUser<Metric, MetricUnit> {
  public id!: string;
  public email!: string;
  public metrics: Array<Metric>;
  public metricsUnits: Array<MetricUnit>;
  
  public addMetric(metricInfo: Metric): void {
    this.metrics.push(metricInfo);
  }
  
  public addMetricUnit(metricUnitInfo: MetricUnit): void {
    this.metricsUnits.push(metricUnitInfo);
  }
  
  public getMetricUnits(metric?: Metric): Array<MetricUnit> {
    return metric ? this.metricsUnits.filter((unit) => unit.metric === metric) : this.metricsUnits;
  }
  
  public getMetrics(): Array<Metric> {
    return this.metrics;
  }
  
  
  constructor(id: string, email: string, metrics: Array<Metric>, metricsUnits: Array<MetricUnit>) {
    this.id = id;
    this.email = email;
    this.metrics = metrics;
    this.metricsUnits = metricsUnits;
  }
}

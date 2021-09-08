import { IMetric } from "./metric.interface";
import { IMetricUnit } from "./metric-unit.interface";

export interface IUser<TMetric extends IMetric, TMetricUnit extends IMetricUnit<any, any>> {
  addMetric(metricInfo: TMetric): void;
  
  addMetricUnit(metricInfo: TMetricUnit): void;
  
  getMetrics(): Array<TMetric>;
  
  getMetricUnits(metric?: TMetric): Array<TMetricUnit>;
}

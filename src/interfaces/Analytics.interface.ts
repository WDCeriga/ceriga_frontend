export interface DataItem {
  value: number;
  color: string;
}

export interface Segment {
  color: string;
  startAngle: number;
  endAngle: number;
}
 
export interface IAnalyticsItem { 
  text: string,
  data: DataItem[]
}
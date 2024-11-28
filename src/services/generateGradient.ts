import { dataProgress } from "@constants/order/progress";
import { DataItem, Segment } from "@interfaces/Analytics.interface";

const calculateSegments = (data: DataItem[]): Segment[] => {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  let startAngle = 0;

  return data.map((item) => {
    const segmentAngle = (item.value / totalValue) * 360;
    const segment: Segment = {
      color: item.color,
      startAngle: startAngle,
      endAngle: startAngle + segmentAngle,
    };
    startAngle += segmentAngle;
    return segment;
  });
};

export const createGradient = (data: DataItem[]): string => {
  const segments = calculateSegments(data);

  return segments
    .map(
      (segment) =>
        `${segment.color} ${Math.round(segment.startAngle)}deg ${Math.round(
          segment.endAngle
        )}deg`
    )
    .join(", ");
};

export const getObjectByValueProgress = (value:number) => {
  return dataProgress.find((item) => item.value === value);
};
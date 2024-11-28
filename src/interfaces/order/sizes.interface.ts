export type sizeType = "customize" | "slim" | "boxy" | "oversize";
export interface ISeleectSize {}

interface ITableSizeItem {
  param: string;
  value: number;
}

export interface ITableSizeRow {
  name: string;
  char: string;
  list: ITableSizeItem[];
}

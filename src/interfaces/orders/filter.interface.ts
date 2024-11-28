export type filterType =
  | "all"
  | "requiresAction"
  | "priced"
  | "accepted"
  | "processing"
  | "shipping"
  | "completed"

export type filterText =
  | "All"
  | "Requires action"
  | "In production"
  | "Ready to ship"
  | "On the way"
  | "Ready to ship"
  | "Priced"
  | "Accepted" 
  | "Processing"
  | "Shipping"
  | "Completed"

export interface IFilterItem {
  type: filterType;
  text: filterText;
}

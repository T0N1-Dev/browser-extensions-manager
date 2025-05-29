export type FilterType = "all" | "active" | "inactive";

export type FilterState = {
  filter: FilterType;
};

export type FilterAction =
  | { type: "SET_FILTER"; payload: FilterType };

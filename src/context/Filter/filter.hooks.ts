import { useContext } from "react";
import { FilterStateContext, FilterDispatchContext } from "./filter.context";

export const useFilterState = () => {
  const context = useContext(FilterStateContext);
  if (!context) throw new Error("useFilterState must be used within a FilterProvider");
  return context;
};

export const useFilterDispatch = () => {
  const context = useContext(FilterDispatchContext);
  if (!context) throw new Error("useFilterDispatch must be used within a FilterProvider");
  return context;
};

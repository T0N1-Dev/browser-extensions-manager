import React, { createContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";
import { filterReducer } from "./filter.reducer";
import type { FilterAction, FilterState } from "./filter.types";

const initialState: FilterState = { filter: "all" };

export const FilterStateContext = createContext<FilterState | undefined>(undefined);
export const FilterDispatchContext = createContext<Dispatch<FilterAction> | undefined>(undefined);

// === Provider ===
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    React.createElement(
      FilterStateContext.Provider,
      { value: state },
      React.createElement(
        FilterDispatchContext.Provider,
        { value: dispatch },
        children
      )
    )
  );
};

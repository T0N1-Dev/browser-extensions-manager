import type { FilterType } from "@/interfaces/filterType";
import { createContext } from "react";

type FilterContextType = {
    filter: FilterType;
    setFilter: (value: FilterType) => void;
};


export const FilterContext = createContext<FilterContextType>({
    filter: "all",
    setFilter: () => " ",
});
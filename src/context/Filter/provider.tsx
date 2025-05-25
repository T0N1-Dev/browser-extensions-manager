import { useState, type FC, type PropsWithChildren } from "react";
import { FilterContext } from "./context";
import type { FilterType } from "@/interfaces/filterType";

export const FilterProvider: FC<PropsWithChildren> = ({ children }) => {
    const [filter, setFilter] = useState<FilterType>("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
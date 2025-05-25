import { useContext } from "react";
import { FilterContext } from "./context";

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used withing an FilterProvider");
    }
    return context;
};

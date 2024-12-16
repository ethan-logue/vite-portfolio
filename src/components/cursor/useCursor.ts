import { useContext } from "react";
import { CursorContext } from "./CursorContext";

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error('useCursor must be used within a CursorContextProvider');
    }
    return context;
}
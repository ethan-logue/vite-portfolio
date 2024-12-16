import { createContext, useState, useMemo, ReactNode } from "react";
import Cursor from "./Cursor";

interface CursorContextType {
    cursor: { hover: boolean };
    setCursor: React.Dispatch<React.SetStateAction<{ hover: boolean }>>;
}
  
const CursorContext = createContext<CursorContextType | undefined>(undefined);

const CursorContextProvider = ({ children }: { children: ReactNode }) => {
    const [cursor, setCursor] = useState({ hover: false });

    const value = useMemo(() => ({ cursor, setCursor }), [cursor, setCursor]);

    return (
        <CursorContext.Provider value={value}>
            <Cursor />
            {children}
        </CursorContext.Provider>
    );
};

export default CursorContextProvider;
export { CursorContext };
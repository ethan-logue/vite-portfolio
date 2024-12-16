import { createContext, useState, ReactNode } from "react";
import Cursor from "./Cursor";

interface CursorContextType {
    cursor: { hover: boolean };
    setCursor: React.Dispatch<React.SetStateAction<{ hover: boolean }>>;
}
  
export const CursorContext = createContext<CursorContextType | undefined>(undefined);

const CursorContextProvider = ({ children }: { children: ReactNode }) => {
    const [cursor, setCursor] = useState({ hover: false });

    return (
        <CursorContext.Provider value={{cursor, setCursor}}>
            <Cursor />
            {children}
        </CursorContext.Provider>
    );
};

export default CursorContextProvider;
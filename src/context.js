import React, { useState, useContext, useEffect } from "react";
import recipes from './data';
import { useParams } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [db, setDb] = useState(recipes);

return <AppContext.Provider value={{db, setDb,}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};
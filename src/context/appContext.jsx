import React, { createContext, useContext, useEffect, useState } from "react";


// ********************************************
// Creating Global Context State
// ********************************************
const AppContext = createContext({});
export const AppCtx = () => useContext(AppContext);

// **********************************
// Serving Context Provider
// **********************************
const AppContextProvider = ({ children }) => {

    const [data, setData] = useState("");

    return (
        <AppContext.Provider
            value={{
                data
            }}
        >
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;
import { createSlice } from "@reduxjs/toolkit";
import CONSTENTS from "../../utils/constents";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null, 
        token: parseCookies()?.token 
    },
    reducers: {
        setUserDetails: (state, action) => {        
            state.data = action.payload.data;
            setCookie(null, "token", action.payload.token);
        },
        logout: (state) => {
            state.data = null;
            destroyCookie(null, "token");
            // window.localStorage.removeItem(`persist:${CONSTENTS.SITE_ID}`);
        }, 
    }
});

export const { setUserDetails, logout } = userSlice.actions;
export default userSlice.reducer;
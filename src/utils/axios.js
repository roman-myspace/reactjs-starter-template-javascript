import axios from "axios";
import CONSTENTS from "./constents";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
// ***********************************************************************
// Basic/Simple API Call (No Authentication Token required)
// ***********************************************************************
export const baseRequest = axios.create({
  baseURL: CONSTENTS.BASE_API_URL,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});



// ***********************************************************************
// API Call (with Auth)
// ***********************************************************************
export const authRequest = axios.create({
  baseURL: CONSTENTS.BASE_API_URL,
});

// AXIOS Interceptor (Request)
authRequest.interceptors.request.use(
  (config) => {
    // tokens
    const { token } = parseCookies();

    if (token) {
      config.headers["Accept"] = "application/json";
      config.headers["content-type"] = "application/json";
      // Authentication Custom Header
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS Interceptor (Response)
authRequest.interceptors.response.use(
  (response) => {
    if(response.data.status == 401){      
      destroyCookie("token");
      localStorage.removeItem(`${CONSTENTS.SITE_ID}`);
      return;
    } else {
      return response;
    }
  }, 
  async (error) => {
    if(error.status == 401){      
      destroyCookie("token");
      localStorage.removeItem(`${CONSTENTS.SITE_ID}`);
      return;
    } else {
      return error;
    }
  }
)


// ==============================================================================================

export const mediaRequest = axios.create({
  baseURL: CONSTENTS.BASE_API_URL,
});

// AXIOS Interceptor (Request)
mediaRequest.interceptors.request.use(
  (config) => {
    // tokens
    const { token } = parseCookies();

    if (token) {
      config.headers["content-type"] = "multipart/form-data";
      // Authentication Custom Header
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS Interceptor (Response)
mediaRequest.interceptors.response.use(
  (response) => {
    if(response.data.status == 401){      
      destroyCookie("token");
      localStorage.removeItem(`${CONSTENTS.SITE_ID}`);
      return;
    } else {
      return response;
    }
  }, 
  async (error) => {
    if(error.status == 401){      
      destroyCookie("token");
      localStorage.removeItem(`${CONSTENTS.SITE_ID}`);
      return;
    } else {
      return error;
    }
  }
)




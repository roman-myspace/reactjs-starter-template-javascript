import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/style.scss';
import { BrowserRouter } from 'react-router-dom';

// store
import store from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; //redux-persist/integration/react
import { persistStore } from "redux-persist";
import Layout from './layout/Layout';
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

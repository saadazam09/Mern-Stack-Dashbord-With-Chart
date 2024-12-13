import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducer from 'state/Index';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'state/api';


const store = configureStore({
  reducer: { global: reducer },
  [api.reducerPath]: api.reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <App />
 </Provider>
 

);


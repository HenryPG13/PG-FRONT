import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Store';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { render } from "react-dom";


render(
<Provider store={store}  >
<React.StrictMode>
  <Auth0Provider
  domain="henry-pg-2023.us.auth0.com"
  clientId="cXpvK53yrkIiTcA6dlMhNoHdI6WoqnkQ"
  redirectUri={window.location.origin }
  > 
<App />
  </Auth0Provider>
  </React.StrictMode>
  </Provider>

, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

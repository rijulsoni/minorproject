import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { RoomProvider} from './context'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
  domain="dev-2mezgdipyxiqk1ki.us.auth0.com"
  clientId="4dllVl9jxui5Hiibx09Z39AfoeB9bf1Y"
  redirectUri={window.location.origin}>
    <RoomProvider> 
  <App />
  </RoomProvider>
</Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

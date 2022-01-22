import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
import WebFont from 'webfontloader';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)


WebFont.load({
  google: {
    families: ['IBM Plex Mono:300,400,500,600,700', 'monospace']
  }
});

ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore()
      }}>
      <App />
    </Context.Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


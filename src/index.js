import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_CLIENTID}
      redirectUri={`http://localhost:3000/contribute`}>
       <App />
      </Auth0Provider>

  </React.StrictMode>
);


// originalImg.addEventListener('load', function() {
 
//   const originalWidth = originalImg.naturalWidth;
//   const originalHeight = originalImg.naturalHeight;

//   const aspectRatio = originalWidth/originalHeight;

//   let newWidth = 500;
//   let newHeight = newWidth/aspectRatio;

//   let canvas = ReactDOM.get
//   canvas.width = newWidth;
//   canvas.height = newHeight;
   
//   ctx.drawImage(originalImg, 0, 0, newWidth, newHeight);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

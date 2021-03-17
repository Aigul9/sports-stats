// import React from 'react';
// import ReactDOM from 'react-dom';
import SportService from 'sport-service';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// class s {
//     sportService = new SportService();
// }

let sportService = new SportService();
sportService.getTeams();
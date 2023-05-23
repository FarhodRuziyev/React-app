import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/app/App';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// function Navbar() {
//   return(
//       <>
//       <div className='navbar'>
//           <div className='navleft'>
//               <div className='logo'>
//                   <img src="/assets/img/IMAGE1.png" alt="#" />
//               </div>
//               <ul className='ulla'>
//                   <li><a href="#">Categories</a></li>
//                   <li><a href="#">Authors</a></li>
//                   <li><a href="#">Template</a></li>
//               </ul>
//           </div>
//           <div className='navright'>
//               <form action="#">
//                   <input type="email" placeholder='your email' />
//               </form>
//           </div>
//       </div>  
//       </>
//   );
// }
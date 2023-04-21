import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './stylesheets/index.css';
import Header from './components/MyNavbar';
import BG from './components/MatrixRain';

import reportWebVitals from './reportWebVitals';

import AnimatedRoutes from './routes/AnimatedRoutes';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>
//   },
//   {
//     path: 'blog',
//     element: <Blog />
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter basename='/'>
      <Header />
      <AnimatedRoutes />
      <BG />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

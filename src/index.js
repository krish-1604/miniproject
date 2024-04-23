
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/login";
import Signup from "./components/signup";
import Report from "./components/ReportIncident";
import Blogs from './components/Blogs';
import UserApp from './components/LoggedIn'
import Contact from './components/ContactUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
  },
  {
    path: "home",
    element: <App/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "report",
    element: <Report/>,
  },
  {
    path: "blogs",
    element: <Blogs/>,
  },
  {
    path: "userhome",
    element: <UserApp/>,
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

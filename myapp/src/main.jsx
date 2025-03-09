import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Home, Portfolio, AboutMe, Skills} from './pages/index.js';

const rooutes = createBrowserRouter([{
  path: '/',
  element: <App />,
  children:[
    {
      path:'/',
      element: <Home />
    },
    {
      path:'/about',
      element: <AboutMe />
    },
    {
      path:'/skills',
      element: <Skills />
    },
    {
      path:'/portfolio',
      element: <Portfolio />
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rooutes} />
  </StrictMode>,
)

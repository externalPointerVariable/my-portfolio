import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Home, Portfolio, About, Skills} from './pages/index.js';
import {Provider} from 'react-redux';
import store from './store/store.js';

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
      element: <About />
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
    <Provider store={store}>
      <RouterProvider router={rooutes} />
    </Provider>
  </StrictMode>,
)

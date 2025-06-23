import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Produclist from './Productlist';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error1 from './Error1'; 
import Nav from './Nav';
// import Home from './Home';
// import Contact from './Contact';
// import Product from './Product';
import ShowProd from './ShowProd';
import About from './About';
import ThemeProvider from './Context/ThemeContext';
import Counter1 from './Counter1';
// import ThemeContext from './Context/ThemeContext';
//import ProdDetail from './ProdDetail';

const Home1 = React.lazy(() => import('./Home'));
const Contact1 = React.lazy(() => import('./Contact'));
const ProdDetail1 = React.lazy(() => import('./ProdDetail'));


const router = createBrowserRouter([
  // {
  //   path: "/home",
  //   element: <Produclist />,
  //   errorElement: <Error1 />
  // }

   {
    path: "/",
    element: <Nav />,
    errorElement: <Error1 />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div>Loading Home...</div>}>
            <Home1 />
          </React.Suspense>
        )
      },
      {
        path: "/home",
        element: (
          <React.Suspense fallback={<div>Loading Home...</div>}>
            <Home1 />
          </React.Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<div>Loading Contact...</div>}>
            <Contact1 />
          </React.Suspense>
        )
      },
      {
        path: "/products",
        element: <ShowProd />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/demo",
        element: <Counter1 />
      },
      {
        path: "/pdetail/:pid",
        element: (
          <React.Suspense fallback={<div>Loading Product Detail...</div>}>
            <ProdDetail1 />
          </React.Suspense>
        )
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* //<Produclist /> */}
  <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    
  </>
);

reportWebVitals();
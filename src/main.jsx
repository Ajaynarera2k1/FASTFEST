import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import userContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
  const[userName,setUserName] = useState();

  // useEffect(() => {
  //       const data ={
  //            name:"ajay"
  //       }
  //       setUserName(data.name);
           
        
  // },[])
 
 
 
  return (
  <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser : userName}}>
    <div className="app">    
    {/* <userContext.Provider value={{loggedInUser : "ganesha"}}>
         <Header />
     </userContext.Provider> */}
       <Header />
      {/** if path = /  */}
      {/* <Body /> */}
      {/** if path = /about  */}
      {/* <About /> */}
      {/** if path = /contact  */}
      {/* <Contact /> */}
      <Outlet />
      <Footer />
    </div>
    </userContext.Provider>
    
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element:<RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
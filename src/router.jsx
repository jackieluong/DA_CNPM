import { createBrowserRouter } from 'react-router-dom'
//import { loginAction, registerAction } from '~/apis/postAPIs'
import Home from './pages/Homepage'
import ErrorPage from './pages/PageNotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AccountInfo from './pages/Account/AccountInfo'
import AccountOrders from './pages/Account/AccountOrders'
import Product from './pages/Productpage/Product'
import ProductDetails from './pages/Detail/ProductDetails'
import Cart from './pages/Cartpage/Cart'

export const router = createBrowserRouter([
    {
    path: '/',
    element: <Home />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
        // action: loginAction
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/account',
        element: <AccountInfo/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/account/orders',
        element: <AccountOrders />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/product',
        element: <Product/>,
        errorElement: <ErrorPage/>,
        
    },
    {
        path: '/product',
        element: <ProductDetails />,
        errorElement: <ErrorPage/>,
        children: [
            {
            path: ':id',
            element: <ProductDetails />,
            errorElement: <ErrorPage/>
            },
        ],
    },
    {
        path: '/cart',
        element: <Cart/>,
        errorElement: <ErrorPage/>
    },

  
//   {
//     path: '/register',
//     element: <Register />,
//     errorElement: <ErrorPage />,
//     action: registerAction
//   }
])

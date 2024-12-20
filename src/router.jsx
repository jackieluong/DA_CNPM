import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Homepage'
import ErrorPage from './pages/PageNotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AccountInfo from './pages/Account/AccountInfo'
import AccountOrders from './pages/Orders/Orders'
import Product from './pages/Productpage/Product'
import ProductDetails from './pages/Detail/ProductDetails'
import Cart from './pages/Cartpage/Cart'

import Payment from './pages/Payment/Payment'
import AdminPage from './pages/Admin/AdminPage'
import Checkout from './pages/Checkout/Checkout'

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
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // Default child route for /product
                element: <Product />,
            },
            {
                path: ':id', // Dynamic route for product details
                element: <ProductDetails />,
            },
        ],
    },
    {
        path: '/cart',
        element: <Cart/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/payment',
        element: <Payment/>
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/admin/*',
        element: <AdminPage />
    }
])

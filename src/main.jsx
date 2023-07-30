import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import OrderPage from './pages/OrderPage/OrderPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/order/:username',
        element: <OrderPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

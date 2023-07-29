import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import OrderPage from './pages/OrderPage/OrderPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
      path: '/order/:username',
      element: <OrderPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

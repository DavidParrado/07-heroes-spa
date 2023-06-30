import React from 'react';
import ReactDOM from 'react-dom/client';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MarvelPage, DcPage, HeroesRoutes, SearchPage, HeroPage } from './heroes';
import { AuthProvider, LoginPage } from './auth';
import { PublicRoute } from './router/PublicRoute';
import { PrivateRoute } from './router/PrivateRoute';

import './styles.css';

const router = createBrowserRouter([
  { 
    path: '*',
    Component: PrivateRoute,
    children: [
      {
        path: '*',
        Component: HeroesRoutes,
        children: [
          { path: '*', element: <Navigate to="/marvel" /> },
          { path: 'marvel', Component: MarvelPage },
          { path: 'dc', Component: DcPage },
          { path: 'search', Component: SearchPage },
          { path: 'hero/:id', Component: HeroPage },
        ],
      }
    ]
  },
  {
    path: 'login/*',
    Component: PublicRoute,
    children: [
      { path: '*', Component: LoginPage }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router } />
    </AuthProvider>
  </React.StrictMode>,
)

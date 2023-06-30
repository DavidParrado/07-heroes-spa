import React from 'react';
import ReactDOM from 'react-dom/client';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';
import { MarvelPage, DcPage } from './heroes';
import { LoginPage } from './auth';
import './styles.css';
import { SearchPage, HeroPage } from './heroes';

const router = createBrowserRouter([
  { 
    path: '*',
    Component: HeroesApp,
    children: [
      { path: '*', element: <Navigate to="/marvel" /> },
      { path: 'marvel', Component: MarvelPage },
      { path: 'dc', Component: DcPage },
      { path: 'search', Component: SearchPage },
      { path: 'hero/:id', Component: HeroPage },
    ]
  },
  { path: 'login', Component: LoginPage },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)

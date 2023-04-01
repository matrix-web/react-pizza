import { lazy, Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { DefaultLayout } from '@/layouts/Default';
import Main from '@/pages/Main';
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ '@/pages/Cart'));
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ '@/pages/NotFound'),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Main />} />
      <Route
        path="cart"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />{' '}
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>,
  ),
);

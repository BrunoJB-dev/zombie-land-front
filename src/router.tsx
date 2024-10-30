import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/attractions',
        element: <AttractionListPage />,
      },
    ],
  },
]);

export default router;

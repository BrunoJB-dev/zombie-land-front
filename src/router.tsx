import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionList';
import AttractionCategoryPage from './pages/AttractionCategoryPage/AttractionCategoryPage';

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
      {
        path: '/attractions/category/:id',
        element: <AttractionCategoryPage />,
      }
    ],
  },
]);

export default router;


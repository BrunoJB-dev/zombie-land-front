import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionList';
import AttractionCategoryPage from './pages/AttractionCategoryPage/AttractionCategoryPage';
import AttractionDetailPage from './pages/AttractionDetail/AttractionDetailPage';

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
      },
      {
        path: '/attractions/:id',
        element: <AttractionDetailPage/>
      },
    ],
  },
]);

export default router;


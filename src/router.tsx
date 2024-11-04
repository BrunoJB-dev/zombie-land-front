import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionListPage';
import AttractionDetailPage from './pages/AttractionDetail/AttractionDetailPage';
import ReservationPage from './pages/Reservation/ReservationPage';
import SignUpForm from './components/SignupForm/SignupForm';

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
        path: '/attractions/:id',
        element: <AttractionDetailPage/>
      },
      {
        path: '/login',
        element: <SignUpForm/>
      },
      {
        path: '/reservation',
        element: <ReservationPage/>
      },
    ],
  },
]);

export default router;


import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionListPage';
import AttractionDetailPage from './pages/AttractionDetail/AttractionDetailPage';
import ReservationPage from './pages/Reservation/ReservationPage';
//import Login from './components/LoginForm/LoginForm';
import ProfilePage from './pages/myProfil/profilPage';

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
        element: <AttractionListPage/>,
      },
      {
        path: '/attractions/:id',
        element: <AttractionDetailPage/>
      },
      {
        path: '/reservation',
        element: <ReservationPage/>
      },
      {
        path: '/profile',
        element: <ProfilePage/>
      },
/*       {
        path: "/login",
        element: <Login />
      } */
    ],
  },
]);

export default router;


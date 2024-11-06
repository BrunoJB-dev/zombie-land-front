import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import AttractionListPage from './pages/AttractionList/AttractionListPage';
import AttractionDetailPage from './pages/AttractionDetail/AttractionDetailPage';
import ReservationPage from './pages/Reservation/ReservationPage';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
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
      /**
       * Pour protéger une route, element prend des ()
       * et on encapsule le composant cible avec ProtectedRoute.
       */
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage/>
          </ProtectedRoute>
      )
      },
/*    {
        path: "/login",
        element: <Login />
      } */
    ],
  },
]);

export default router;


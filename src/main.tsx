import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import { ToastContainer } from 'react-toastify';
import {ReservationCalendarProvider} from './ReservationCalendarContext'
import router from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
   <AuthProvider> 
    <ReservationCalendarProvider>
    <RouterProvider router={router}/>
   </ReservationCalendarProvider>
   </AuthProvider>
   <ToastContainer /> 
  </StrictMode>,
)



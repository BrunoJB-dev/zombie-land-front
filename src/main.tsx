import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import { ToastContainer } from 'react-toastify';
import router from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* L'authentification est sur toutes les routes ? */}
   <AuthProvider> 
    <RouterProvider router={router}/>
   </AuthProvider>
   <ToastContainer /> 
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import router from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* L'authentification est sur toutes les routes ? */}
   <AuthProvider> 
    <RouterProvider router={router}/>
   </AuthProvider> 
  </StrictMode>,
)

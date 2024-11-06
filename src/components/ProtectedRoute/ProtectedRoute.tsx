import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

interface ProtectedRouteProps {
    children: ReactNode;
}
/**
 * Composant qui permet de protéger un autre composant 
 * Si il n'y a pas d'user on redirige vers l'accueil (cf router -> la route profile)
 */
export function ProtectedRoute({children}: ProtectedRouteProps){
    const { user } = useAuth();
    console.log('user :>> ', user);
    if(!user){
        return <Navigate to='/' />
    }

    return children;
}

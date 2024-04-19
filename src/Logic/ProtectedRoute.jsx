
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({role, children }) => {
    // Suponemos que aquí obtienes el rol del usuario actual. 
    // api autenticacion con rol de usuario enviar jwt y obtener rol
    const currentUserRole = "student"; 
  
    return currentUserRole === role ? (
      children
    ) : (
      <Navigate to="/inicio" replace /> 
    );
  };
  
 
  

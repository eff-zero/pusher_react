import { useAuthSelector } from '@/store';
import { Navigate } from 'react-router-dom';

function PublicRoutes() {
  const { isAuthenticated } = useAuthSelector();
  return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}

export default PublicRoutes;

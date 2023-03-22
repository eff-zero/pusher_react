import { LOGIN } from '@/router/routes';
import { useAuthSelector } from '@/store';
import { Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const { isAuthenticated } = useAuthSelector();
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} />;
}

export default PrivateRoutes;

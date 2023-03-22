import { Route } from 'react-router-dom';
import { RouteWithNotFound, PrivateRoutes, PublicRoutes } from './guards';

function App() {
  return (
    <RouteWithNotFound>
      <Route index element={<>INDEX</>} />

      <Route element={<PublicRoutes />}>
        <Route path='/login' element={<> LOGIN </>} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<> HOME </>} />
      </Route>
    </RouteWithNotFound>
  );
}

export default App;

import { Route } from 'react-router-dom';
import { RouteWithNotFound, PrivateRoutes, PublicRoutes } from './guards';
import { LOGIN } from './router/routes';

import Chat from './components/Chat';


function App() {
  return (
    <RouteWithNotFound>
      <Route index element={<>INDEX</>} />

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<> LOGIN </>} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<> HOME </>} />
        <Route path='/chat' element={<Chat />} />
      </Route>
    </RouteWithNotFound>
  );
}

export default App;

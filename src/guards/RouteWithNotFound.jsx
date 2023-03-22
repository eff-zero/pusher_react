import { Routes, Route } from 'react-router-dom';

function RouteWithNotFound({children}) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<> 404 NOT FOUND </>} />
    </Routes>
  )
}

export default RouteWithNotFound;

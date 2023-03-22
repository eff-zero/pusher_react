import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AuthLayout from './layouts/AuthLayout';

function App() {
  const auth = true;

  return (
    <div className='container-fluid vh-100'>
      <div className='row'>
        <Sidebar />
        {auth ? <AuthLayout> <div> Jesus </div> </AuthLayout> : ''}
      </div>
    </div>
  );
}

export default App;

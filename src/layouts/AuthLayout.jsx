import Navbar from '@/components/Navbar';

function AuthLayout({ children }) {
  return (
    <section className='col-9'>
      <Navbar />
      {children}
    </section>
  );
}

export default AuthLayout;

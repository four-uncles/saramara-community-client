// import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

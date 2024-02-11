import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>푸터</footer>
    </div>
  );
}

export default Layout;

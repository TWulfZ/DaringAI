import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Layout;
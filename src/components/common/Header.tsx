import { ROUTE_PATH } from '@/constants/path';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link to={ROUTE_PATH.MAIN}>
        <img alt="logo" src="public/images/Logo.svg" />
      </Link>
      <div className="mr-4 font-gmarket font-medium">
        <Link to={ROUTE_PATH.ABOUT} className="mr-4">
          소개
        </Link>
        <Link to={ROUTE_PATH.POST_WRITE}>글쓰기</Link>
      </div>
    </header>
  );
};
export default Header;

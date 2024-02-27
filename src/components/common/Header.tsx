import { ROUTE_PATH } from '@/constants/path';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link to={ROUTE_PATH.MAIN}>
        <img alt="logo" src="/images/Logo.svg" />
      </Link>
      <div className="mr-4 font-gmarket font-medium">
        <Link to={ROUTE_PATH.ABOUT} className="mr-4">
          소개
        </Link>
        <Link to={ROUTE_PATH.POST_WRITE} className="mr-4">
          글쓰기
        </Link>
        <Link to={ROUTE_PATH.LOGIN} className="mr-4">
          <button className="px-4 py-2 bg-accent-300 text-white rounded-md">로그인</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;

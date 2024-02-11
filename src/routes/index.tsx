import NotFound from '@/pages/NotFound';
import Main from '@/pages/Main';
import Layout from '@/pages/Layout';
import PostDetail from '@/pages/PostDetail';
import PostWrite from '@/pages/PostWrite';
import About from '@/pages/About';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import { ROUTE_PATH } from '@/constants/path.ts';

const routes = [
  {
    path: ROUTE_PATH.MAIN,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: ROUTE_PATH.POST_DETAIL, element: <PostDetail /> },
      { path: ROUTE_PATH.POST_WRITE, element: <PostWrite /> },
      { path: ROUTE_PATH.ABOUT, element: <About /> },
    ],
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },

  {
    path: ROUTE_PATH.SIGNUP,
    element: <SignUp />,
  },
];

export default routes;

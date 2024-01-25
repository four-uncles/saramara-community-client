import NotFound from '@/pages/NotFound';
import Main from '@/pages/Main';

const routes = [
  {
    // element: <Layout />,
    errorElement: <NotFound />,
    children: [{ path: '/', element: <Main /> }],
  },
];

export default routes;

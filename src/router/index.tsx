import { useMemo } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import { LayoutPublic } from '@src/components/LayoutPublic';
import { PageLanding } from '@src/pages/landing/PageLanding';

export const useRouter = () => {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
    }),
    [navigate]
  );
};

const Router = () => {
  return (
    <Routes>
      <Route element={<LayoutPublic />}>
        <Route path={'/'} element={<PageLanding />} />
      </Route>
    </Routes>
  );
};

// const Router = () => {
// return useRoutes([
//   {
//     path: '/',
//     element: <PageLanding />,
//   },
// ]);
// };

export default Router;

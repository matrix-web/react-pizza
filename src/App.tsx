import { FC } from 'react';
import { GlobalStyles } from '@/helpers/styles/globalStyles';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import { FC } from 'react';
import { Outlet } from 'react-router';

const Home: FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <Outlet />
    </div>
  );
};

export default Home;

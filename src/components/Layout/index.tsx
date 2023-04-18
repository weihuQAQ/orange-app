import type { FC } from 'react';
import React from 'react';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return <Outlet />;
};

export default Layout;

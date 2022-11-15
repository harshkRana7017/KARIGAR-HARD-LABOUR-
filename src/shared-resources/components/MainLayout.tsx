import NavBarTabs from 'Common/NavBarTabs';
import React, { FC, memo } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout: FC = () => (
  <>
    <div className='flex space-x-2 m-2 h-12  py-1 text-white text-center justify-center '>
      <Link to='/homepage'>
        <NavBarTabs>HomePage</NavBarTabs>
      </Link>
      <Link to='/jobs'>
        <NavBarTabs>Jobs</NavBarTabs>
      </Link>
      <Link to='/postJobs'>
        <NavBarTabs>Post Jobs</NavBarTabs>
      </Link>
      <Link to='/karigars'>
        <NavBarTabs>Karigars</NavBarTabs>{' '}
      </Link>
    </div>
    <div className='bg-gray-300 h-screen'>
      <Outlet />
    </div>
  </>
);
export default memo(MainLayout);

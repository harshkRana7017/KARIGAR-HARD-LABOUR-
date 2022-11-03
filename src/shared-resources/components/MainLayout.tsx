import NavBarTabs from 'Common/NavBarTabs';
import React, { FC, memo } from 'react';
import { Link, Outlet } from 'react-router-dom';

type  MainLayoutProps = {};

const  MainLayout: FC< MainLayoutProps> = (props) => <>
<div className='flex space-x-2 m-2 text-white text-center justify-center'>
    <Link to='/homepage'><NavBarTabs>HomePage</NavBarTabs>
</Link>
<Link to='/jobs'><NavBarTabs>Jobs</NavBarTabs>
</Link>
<Link to='/postJobs'><NavBarTabs>Post Jobs</NavBarTabs>
</Link>



</div>
<div className='bg-gray-300 h-screen'>
    <Outlet/>
</div>
</>;
export default memo( MainLayout);

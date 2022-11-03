import NavBarTabs from 'Common/NavBarTabs';
import React, { FC, memo } from 'react';
import { Link, Outlet } from 'react-router-dom';

type  MainLayoutProps = {};

const  MainLayout: FC< MainLayoutProps> = (props) => <>
<div>this is main layout and everything will be under this. Here we will add naviagtion bar for top of the page and this will remian constanat in every page</div>
<div className='flex space-x-2'>
    <Link to='/homepage'><NavBarTabs>HomePage</NavBarTabs>
</Link>
<Link to='/jobs'><NavBarTabs>Jobs</NavBarTabs>
</Link>
<Link to='postJobs'><NavBarTabs>Post Jobs</NavBarTabs>
</Link>



</div>
<div>
    <Outlet/>
</div>
</>;
export default memo( MainLayout);

import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type  HomePageProps = {};

const  HomePage: FC< HomePageProps> = (props) => <div className='p-4'>
    <div className='flex justify-around mt-4'>
    <div className=' h-64 w-1/3 bg-cyan-700 rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer '>
        <Link to='/jobs'>
            <div className='w-full h-full p-20'>
    
       <h1 className='text-white text-center text-5xl '> Want a Job?</h1>

       </div>
    </Link>
    </div>

    
    <div className=' h-64 w-1/3 bg-cyan-700 rounded-lg  text-white text-center text-2xl hover:scale-110 transition-all duration-500 cursor-pointer'>
    <Link to='/postJobs'>
    <div className='w-full h-full py-20'>

    <h1 className='text-white text-center text-5xl '> Want to hire?</h1>
    <div className='bg-red-200 py-2 mt-2'><h2>post jobs for free</h2></div>
    </div>
    </Link>

    </div>
    
    </div>
</div>;
export default memo( HomePage);

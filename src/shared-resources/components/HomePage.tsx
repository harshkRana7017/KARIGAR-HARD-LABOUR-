import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { HiDesktopComputer } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';

const HomePage: FC = () => (
  <div className='p-4'>
    <div className='text-center'>
      <h1 className='text-slate-700 text-6xl'>Hard Skills</h1>
      <h2 className='text-2xl'>Hard for a reason</h2>
      <h2>let us respectfully hire the holders</h2>
    </div>

    <div className='flex justify-around mt-4'>
      <div className=' h-64 w-1/3 bg-cyan-700 rounded-lg  text-white text-center text-2xl hover:scale-110 transition-all duration-500 cursor-pointer '>
        <Link to='/jobs'>
          <div className='w-full h-full py-20'>
            <h1 className=' text-5xl '> Want a Job?</h1>
            <div className='bg-red-200 py-2 mt-2'>
              <h2>find a job that suits you best</h2>
            </div>
          </div>
        </Link>
      </div>

      <div className=' h-64 w-1/3 bg-cyan-700 rounded-lg  text-white text-center text-2xl hover:scale-110 transition-all duration-500 cursor-pointer'>
        <Link to='/postJobs'>
          <div className='w-full h-full py-20'>
            <h1 className='text-white text-center text-5xl '> Want to hire?</h1>
            <div className='bg-red-200 py-2 mt-2'>
              <h2>post jobs for free</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className='text-center mt-10'>
      <h1 className='text-slate-700 text-6xl'>How to get hired through us?</h1>
      <div className='flex justify-around mt-8 w-1/2 mx-auto'>
        <div className=' h-40 w-64 bg-cyan-700	 rounded-lg hover:mt-4 transition-all duration-500 cursor-pointer '>
          <div className='w-full h-full  py-4'>
            <HiDesktopComputer size={30} color='yellow' className='mx-auto' />
            <h1 className='text-white text-center text-2xl '>
              Apply through our website
            </h1>
            <div className='bg-red-200 mt-2 py-1'>
              <h2>by clicking on Want a Job Section</h2>
            </div>
          </div>
        </div>
        <div className=' h-40 w-64 bg-cyan-700	rounded-lg hover:mt-4 transition-all duration-500 cursor-pointer '>
          <div className='w-full h-full py-4'>
            <MdCall size={30} color='yellow' className='mx-auto' />
            <h1 className='text-white text-center text-2xl '>
              Give us a call at 70171469510
            </h1>
            <div className='bg-red-200 mt-2 py-1'>
              <h2>and get connected directly</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default memo(HomePage);

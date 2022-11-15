import React, { FC, memo } from 'react';

type EmployeeCardProps = {
  name?: string;
  age?: string;
  sex?: string;
  karigarType?: string;
  // yhn p image ka bi ek prop lekr image tag lga dena h aur src atrribute mei pass krdena h aur or wali condition mei ek aise profile ki koi image lga ni h
};

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const { name, age, sex, karigarType } = props;

  return (
    <div className=' w-96 bg-white  rounded-lg  m-2 '>
      <div className='bg-cyan-700 h-10 w-full  pt-2 rounded-t-lg '>
        <div className='bg-blue-200  w-1/3  h-1 rounded-lg mt-3 ml-6' />
      </div>
      <div className='p-2 pt-4'>
        {/* to be replaced by image tag   */}
        <div className='bg-gray-400 rounded-full w-32 h-32 mx-auto  border-4  border-cyan-700' />
        <div className=' p-2 flex flex-col space-y-2 items-center text-xl  rounded-lg'>
          <h1 className='text-cyan-700'>Name{name}</h1>
          <h1>Age{age}</h1>
          <h1>Sex{sex}</h1>
          <h1>karigarType{karigarType}</h1>
        </div>
      </div>
    </div>
  );
};
export default memo(EmployeeCard);

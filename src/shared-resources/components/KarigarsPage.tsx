import React, { FC, memo } from 'react';
import EmployeeCard from './EmployeeCard';

const KarigarsPage: FC = () => (
  <div className='flex flex-wrap space-x-12'>
    {Array(3)
      .fill('')
      .map((_v, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <EmployeeCard key={index} />
      ))}
  </div>
);
export default memo(KarigarsPage);

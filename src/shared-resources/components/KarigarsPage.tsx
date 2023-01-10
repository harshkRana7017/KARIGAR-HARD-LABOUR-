import { Karigar } from 'models/entities/Karigar';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { karigarSelectors } from 'redux/Selectors/karigarSelector';
import EmployeeCard from './EmployeeCard';

const KarigarsPage: FC = () => {
  const karigars = useSelector(karigarSelectors);

  return (
    <div className='flex flex-wrap space-x-12'>
      {karigars.map((karigar: Karigar) => (
        <EmployeeCard
          key={karigar.id}
          name={karigar.Name}
          age={karigar.Age}
          sex={karigar.Sex}
          karigarType={karigar.KarigarType}
        />
      ))}

      {/* {Array(3)
      .fill('')
      .map((_v, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <EmployeeCard key={index} />
      ))} */}
    </div>
  );
};
export default memo(KarigarsPage);

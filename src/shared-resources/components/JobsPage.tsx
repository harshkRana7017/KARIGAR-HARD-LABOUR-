import AddKarigarForm from 'Forms/AddKarigarForm';
import React, { FC, memo } from 'react';

type JobsPageProps = {};

const JobsPage: FC<JobsPageProps> = () => (
  <div className='p-4'>
    <AddKarigarForm className='mx-auto' />
  </div>
);
export default memo(JobsPage);

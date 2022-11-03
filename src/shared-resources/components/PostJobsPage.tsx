import PostJobForm from 'Forms/PostJobForm';
import React, { FC, memo } from 'react';

type  PostJobsPageProps = {};

const  PostJobsPage: FC< PostJobsPageProps> = (props) => <div className='p-4'>
<PostJobForm className='mx-auto'/></div>;
export default memo( PostJobsPage);

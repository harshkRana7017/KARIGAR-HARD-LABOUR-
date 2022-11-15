import { Form, Formik } from 'formik';
import React, { FC, memo } from 'react';
import Button from 'shared-resources/components/Button/Button';
import FormikInput from 'shared-resources/components/Input/FormikInput';

type PostJobFormProps = {
  className?: string;
};

const PostJobForm: FC<PostJobFormProps> = ({ className }) => (
  <div className='w-full h-1/2 ml-4'>
    <div className={`w-1/3  ${className}`}>
      <div className='bg-cyan-700 h-10 w-full  pt-2 rounded-t-lg '>
        <div className='bg-blue-200  w-1/2 h-1 rounded-lg mt-3 ml-6' />
      </div>
      <div className={`bg-white rounded-b-lg p-4 `}>
        <Formik
          initialValues={{
            jobTitle: '',
            wage: '',
            workerType: '',
            description: '',
          }}
          onSubmit={() => {}}
        >
          <Form className='flex flex-col'>
            <FormikInput
              name='jobTitle'
              placeholder='Job Title'
              label='Job Title'
              className='mb-4'
            />
            <FormikInput
              name='wage'
              placeholder='Wage'
              label='Wage'
              className='mb-4'
            />
            <FormikInput
              name='workerType'
              placeholder='Worker Type'
              label='Worker Type'
              className='mb-4'
            />
            <FormikInput
              name='description'
              placeholder='Job Description'
              label='Job Description'
              className='mb-4'
            />
            <Button className='mt-4 p-2 w-32 ml-auto bg-cyan-600 text-white text-xl'>
              Post Job
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  </div>
);
export default memo(PostJobForm);

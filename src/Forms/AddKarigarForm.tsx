import { Form, Formik } from 'formik';
import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { karigarAddAction } from 'redux/actions/karigar.action';
import Button from 'shared-resources/components/Button/Button';
import FormikInput from 'shared-resources/components/Input/FormikInput';

type PostJobFormProps = {
  className?: string;
};

const PostJobForm: FC<PostJobFormProps> = ({ className }) => {
  const dispatch = useDispatch();
  let i = 0;
  return (
    <div className='w-full h-1/2 ml-4'>
      <div className={`w-1/3  ${className}`}>
        <div className='bg-cyan-700 h-10 w-full  pt-2 rounded-t-lg '>
          <div className='bg-blue-200  w-1/2 h-1 rounded-lg mt-3 ml-6' />
        </div>
        <div className={`bg-white rounded-b-lg p-4 `}>
          <Formik
            initialValues={{
              Name: '',
              Age: '',
              Sex: '',
              KarigarType: '',
            }}
            onSubmit={(values) => {
              dispatch(karigarAddAction({ ...values, id: i }));
              i += 1;
            }}
            enableReinitialize
          >
            {({ setValues }) => (
              <Form className='flex flex-col'>
                <FormikInput
                  name='Name'
                  placeholder='Name'
                  label='Name'
                  className='mb-4'
                />
                <FormikInput
                  name='Age'
                  placeholder='Age'
                  label='Age'
                  className='mb-4'
                />
                <FormikInput
                  name='Sex'
                  placeholder='Sex'
                  label='Sex'
                  className='mb-4'
                />
                <FormikInput
                  name='KarigarType'
                  placeholder=' KarigarType'
                  label=' KarigarType'
                  className='mb-4'
                />
                <Button
                  type='submit'
                  className='mt-4 p-2 w-32 ml-auto bg-cyan-600 text-white text-xl'
                  onClick={() => {
                    setValues({ Name: '', Age: '', Sex: '', KarigarType: '' });
                  }}
                >
                  Post Karigar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default memo(PostJobForm);

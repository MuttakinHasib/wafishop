import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from '../components/Container';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

import SocialButton from '../components/Buttons/SocialButton';
import { facebookIcon, githubIcon, googleIcon } from '../components/Icons';
import { useDispatch, useSelector } from 'react-redux';

import { setNotify } from '../store/_actions/notifyActions';
import { authLogin } from '../store/_actions/authActions';

const emailIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width={24}
    height={24}
    stroke='currentColor'
    strokeWidth={2}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='h-5 w-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    />
  </svg>
);
const lockIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width={24}
    height={24}
    stroke='currentColor'
    strokeWidth={2}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='h-5 w-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    />
  </svg>
);
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector(state => state.auth);
  const { register, handleSubmit, setValue, watch, errors } = useForm();
  const onSubmit = data => {
    setValue('password', '', { shouldValidate: false });
    setValue('email', '', { shouldValidate: false });
    dispatch(authLogin(data));
  };
  const errMessage = Object.keys(errors).map(error => errors[error].message);

  errMessage.length !== 0 && dispatch(setNotify({ error: errMessage }));
  useEffect(() => {
    if (auth.user) {
      router.push('/');
    }
  }, [auth.user]);
  return (
    <Container>
      <div
        className='flex sm:justify-center justify-between items-center'
        style={{ height: '85vh' }}
      >
        <div className='sm:hidden w-2/3 flex'>
          <div>
            <h1 className='lg:text-5xl text-6xl font-semibold text-gray-900'>
              Welcome <br /> Back!
            </h1>
            <p className='mt-10 leading-7 text-gray-500'>
              If you don't have an account <br />
              Your can{' '}
              <Link href='/register'>
                <a className='text-indigo-500 font-semibold hover:underline'>
                  Register here!
                </a>
              </Link>
            </p>
          </div>
          <div className='md:hidden mx-auto'>
            <Image
              src='/assets/signin.svg'
              alt='Picture of the author'
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className='md:w-2/4 lg:w-1/3 sm:flex-1 w-1/4 sm:px-2'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type='email'
              name='email'
              placeholder='Enter email address'
              innerRef={register({
                required: 'Please include a valid email address',
              })}
              icon={emailIcon()}
            />
            <Input
              type='password'
              name='password'
              placeholder='Enter password'
              innerRef={register({
                required: 'Password is required!',
              })}
              icon={lockIcon()}
            />
            <div className='text-right text-gray-400'>
              <Link href='/forgetPassword'>
                <a>Recover password</a>
              </Link>
            </div>
            <button className='w-full mt-3 h-12 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-colors duration-300'>
              Sign in
            </button>
          </form>
          <div className='flex justify-between items-center my-7'>
            <span className='w-full bg-gray-100' style={{ height: '2px' }} />
            <span className='flex-1 px-3 text-sm text-gray-300 whitespace-nowrap'>
              or continue with
            </span>
            <span className='w-full bg-gray-100' style={{ height: '2px' }} />
          </div>
          <div className='flex justify-between items-center'>
            <SocialButton icon={googleIcon()} />
            <SocialButton icon={githubIcon()} />
            <SocialButton icon={facebookIcon()} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

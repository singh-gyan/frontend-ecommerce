import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { signup } from '../api/paths';
import { useNavigate } from 'react-router-dom';
interface FormData {
  email: string;
  password: string;
  phone: string;
  name: string;
  address: string;
  city: string;
  state: string;
}
interface apiOverride extends Omit<FormData, 'address' | 'city' | 'state'> {
  address: {
    street: string;
    city: string;
    state: string;
  };
  city?: string;
  state?: string;
}

const signupSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    phone: yup.number().required().min(1e9).max(1e10),
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(signupSchema) });
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [servererrorMessage, setServererrorMessage] = useState('');
  const onSubmit = handleSubmit(data => {
    console.log(data);

    let body: apiOverride;
    body = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      name: data.name,
      address: {
        street: data.address,
        city: data.city,
        state: data.state,
      },
    };
    axios
      .post(signup, { ...body })
      .then(res => {
        nav('/login');
      })
      .catch(err => {
        setServererrorMessage('oh no!!Something went wrong');
        console.log(err);
      });
  });
  return (
    <div className=' flex justify-center items-center px-4 py-16 sm:px-6 lg:px-8'>
      <div className='max-w-xl w-full'>
        <h1 className='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>
          Get started today
        </h1>

        <p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form className=' p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
          <p className='text-lg font-medium'>Sign up to your account</p>
          <p className='text-red-400'>{servererrorMessage}</p>
          <div>
            <label htmlFor='email' className='text-sm font-medium'>
              Email
            </label>

            <div className='relative mt-1'>
              <input
                {...register('email')}
                type='email'
                id='email'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter email'
              />
              <p>{errors.email && errors.email.message}</p>
              <span className='absolute inset-y-0 inline-flex items-center right-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor='password' className='text-sm font-medium'>
              Password
            </label>

            <div className='relative mt-1'>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter password'
              />
              <p>{errors.password && errors.password.message}</p>
              <span
                className='absolute inset-y-0 inline-flex items-center right-4 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor='confirmPassword' className='text-sm font-medium'>
              Confirm Password
            </label>

            <div className='relative mt-1'>
              <input
                type='password'
                id='confirmPassword'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Confirm password'
              />
            </div>
          </div>
          <div>
            <label htmlFor='name' className='text-sm font-medium'>
              Name
            </label>

            <div className='relative mt-1'>
              <input
                {...register('name')}
                type='text'
                id='name'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter password'
              />
            </div>
          </div>
          <div>
            <label htmlFor='address' className='text-sm font-medium'>
              Address
            </label>

            <div className='relative mt-1'>
              <input
                {...register('address')}
                type='text'
                id='address'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter password'
              />
              <p>{errors.address && errors.address.message}</p>
            </div>
          </div>
          <div className='flex justify-between gap-2 '>
            <div className='w-1/2'>
              <label htmlFor='city' className='text-sm font-medium'>
                City
              </label>

              <div className='relative mt-1'>
                <input
                  {...register('city')}
                  type='text'
                  id='city'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter password'
                />
                <p>{errors.city && errors.city.message}</p>
              </div>
            </div>
            <div className='w-1/2'>
              <label htmlFor='state' className='text-sm font-medium'>
                State
              </label>

              <div className='relative mt-1'>
                <input
                  {...register('state')}
                  type='text'
                  id='state'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter password'
                />
                <p>{errors.state && errors.state.message}</p>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='phone' className='text-sm font-medium'>
              Contact No.
            </label>

            <div className='relative mt-1'>
              <input
                {...register('phone')}
                type='text'
                id='phone'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter password'
              />
              <p>{errors.phone?.message}</p>
            </div>
          </div>

          <button
            className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../api/paths';
import FavouriteSVG from '../assets/FavouriteSVG';
import Spinner from '../components/atoms/Spinner';
import useAppStore from '../zustand';

interface Product {
  Title?: string;
  Image?: string;
  Price?: string;
  _id: string;
}
const rating = ['5', '4+', '3+'];
const Product = () => {
  const location = useLocation();
  const nav = useNavigate();
  const isAuthenticated = useAppStore(state => state.isAuthenticated);
  const [wishList, setWishList] = useState<{ [key: string]: number | string }>(
    {}
  );
  const { data: brands, isLoading } = useQuery(
    [`${location.pathname.split('/')[1]}`],
    () =>
      axios
        .get(`${baseUrl}${location.pathname.split('/')[1]}`)
        .then(response => response.data)
  );
  if (isLoading) {
    return (
      <>
        {' '}
        <Spinner />
      </>
    );
  }
  const handleWishList = (productId: any | undefined) => {
    if (!productId?.id) return;
    console.log(productId.id);
    if (!isAuthenticated) nav('/login');
    if (wishList[productId.id]) {
      let temp = { ...wishList };
      delete temp[productId.id];
      setWishList(temp);
    } else {
      setWishList(prev => {
        return { ...prev, [productId.id]: productId.id };
      });
    }
  };

  return (
    <section>
      <div className='max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start'>
          <div className='lg:sticky lg:top-4'>
            <details
              open
              className='overflow-hidden border border-gray-200 rounded'
            >
              <summary className='flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden'>
                <span className='text-sm font-medium'>Toggle Filters</span>

                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </summary>

              <form
                action=''
                className='border-t border-gray-200 lg:border-t-0'
              >
                <fieldset>
                  <legend className='block w-full px-5 py-3 text-xs font-medium bg-gray-50'>
                    Brand
                  </legend>

                  <div className='px-5 py-6 space-y-2'>
                    {brands.map((items: { company?: string }) => (
                      <div className='flex items-center' key={items?.company}>
                        <input
                          id={items.company}
                          type='checkbox'
                          name='type[toy]'
                          className='w-5 h-5 border-gray-300 rounded'
                        />

                        <label
                          htmlFor={items.company}
                          className='ml-3 text-sm font-medium'
                        >
                          {items.company?.split('-')[0].toUpperCase()}
                        </label>
                      </div>
                    ))}

                    <div className='pt-2'>
                      <button
                        type='button'
                        className='text-xs text-gray-500 underline'
                      >
                        Reset Brand
                      </button>
                    </div>
                  </div>
                </fieldset>

                <div>
                  <fieldset>
                    <legend className='block w-full px-5 py-3 text-xs font-medium bg-gray-50'>
                      Rating
                    </legend>

                    <div className='px-5 py-6 space-y-2'>
                      {rating.map((rating, key) => (
                        <div className='flex items-center' key={key}>
                          <input
                            id={rating}
                            type='checkbox'
                            className='w-5 h-5 border-gray-300 rounded'
                          />

                          <label
                            htmlFor={rating}
                            className='ml-3 text-sm font-medium'
                          >
                            {rating}
                          </label>
                        </div>
                      ))}

                      <div className='pt-2'>
                        <button
                          type='button'
                          className='text-xs text-gray-500 underline'
                        >
                          Reset Rating
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className='flex justify-between px-5 py-3 border-t border-gray-200'>
                  <button
                    name='reset'
                    type='button'
                    className='text-xs font-medium text-gray-600 underline rounded'
                  >
                    Reset All
                  </button>

                  <button
                    name='commit'
                    type='button'
                    className='px-5 py-3 text-xs font-medium text-white bg-green-600 rounded'
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>

          <div className='lg:col-span-3'>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-gray-500'>
                {/* <span className='hidden sm:inline'>Showing</span>6 of 24
                Products */}
              </p>

              <div className='ml-4'>
                <label htmlFor='SortBy' className='sr-only'>
                  Sort
                </label>

                <select
                  id='SortBy'
                  name='sort_by'
                  className='text-sm border-gray-100 rounded'
                >
                  <option>Sort</option>
                  <option value='title-asc'>Title, A-Z</option>
                  <option value='title-desc'>Title, Z-A</option>
                  <option value='price-asc'>Price, Low-High</option>
                  <option value='price-desc'>Price, High-Low</option>
                </select>
              </div>
            </div>
            <div
              className='grid grid-cols-1 gap-px mt-4 bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3'
              onClick={e => handleWishList(e.target)}
            >
              {brands.map((brand: { items?: [] }) =>
                brand?.items?.map((data: Product) => (
                  <div className='relative block bg-white' key={data._id}>
                    <button
                      type='button'
                      name='wishlist'
                      id={data._id}
                      className='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <FavouriteSVG wishList={wishList} productId={data._id} />
                    </button>

                    <img
                      loading='lazy'
                      alt='Build Your Own Drone'
                      className='object-contain w-full h-56 lg:h-72'
                      src={data.Image}
                    />

                    <div className='p-6'>
                      <span className='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 className='mt-4 text-lg font-bold h-20 overflow-hidden '>
                        {data.Title}
                      </h5>

                      <p className='mt-2 text-sm font-medium text-gray-600'>
                        ₹ {data.Price}
                      </p>

                      <button
                        name='add'
                        type='button'
                        className='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span className='text-md font-medium'>Add to Cart</span>

                        <svg
                          className='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

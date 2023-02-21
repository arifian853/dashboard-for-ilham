import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const LandingPage = () => {
  return (
    <div className='landing-page w-full h-screen'>
      <Helmet>
        <title>
          Welcome !
        </title>
      </Helmet>
      <div className="left-side w-1/2 text-left px-40 leading-6">
        <h1 className='text-3xl font-black'>Hello World !</h1>
        <p>Selamat datang di aplikasi monitoring tegangan dan arus kendaraan listrik Indonesia!</p>
      </div>
      <div className="right-side w-1/2 text-center">
        <Link to='/login'>
          <button className='p-2 rounded-md cursor-pointer w-1/4'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

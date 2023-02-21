import React from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { RiCelsiusLine } from 'react-icons/ri';

export const DashboardBody = ({ degree }) => {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='dashboard w-full h-screen flex items-center justify-center'>
      <div className="main flex items-center flex-col p-5 gap-5">

        <div className="greeting p-5">
          <h1 className='text-3xl'>Selamat Datang! {user && user.email}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, at.</p>
        </div>

        <div className="monitor flex items-center justify-center gap-3">
          <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
            <p>Suhu</p>
            <h1 className='text-3xl flex items-center justify-center'>{degree} <RiCelsiusLine /></h1>
          </div>

          <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
            <p>Arus</p>
            <h1 className='text-3xl flex items-center justify-center'>{degree} V</h1>
          </div>

          <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
            <p>Tegangan</p>
            <h1 className='text-3xl flex items-center justify-center'>{degree} A</h1>
          </div>

          <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
            <p>Kecepatan</p>
            <h1 className='text-3xl flex items-center justify-center'>{degree} Km/jam</h1>
          </div>
        </div>

        <button onClick={handleLogout} className='p-2 rounded-md cursor-pointer w-2/4 m-auto'>Logout</button>

      </div>
    </div>
  )
}

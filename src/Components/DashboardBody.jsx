import React from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { RiCelsiusLine } from 'react-icons/ri';
import Clock from './Clock';
import { BiLogOut } from 'react-icons/bi';

export const DashboardBody = ({ values }) => {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="greeting rounded-md p-5">
        <h1 className='text-2xl'>Selamat Datang! {user && user.email}  </h1> 
      </div>
      
      <div className='dashboard w-full flex items-center justify-center'>
        <div className="main flex items-center justify-between flex-col p-5 gap-5">
        <h1 className='text-2xl'>Real-time Monitoring</h1>
        <p className='flex items-center gap-1'>Time : <Clock /> WIB </p>
          <div className="monitor flex items-center justify-center gap-3 w-full p-3">
            <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
              <p>Suhu</p>
              <h1 className='text-3xl flex items-center justify-center'>{values.LED1} <RiCelsiusLine /></h1>
            </div>

            <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
              <p>Arus</p>
              <h1 className='text-3xl flex items-center justify-center'>{values.Mode1} A</h1>
            </div>

            <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
              <p>Tegangan</p>
              <h1 className='text-3xl flex items-center justify-center'>{values.degree} V</h1>
            </div>

            <div className="temp flex items-center justify-center flex-col p-3 rounded-md">
              <p>Kecepatan</p>
              <h1 className='text-3xl flex items-center justify-center'>{values.degree} Km/jam</h1>
            </div>
            
          </div>
          <button onClick={handleLogout} className='text-base cursor-pointer flex items-center gap-2'> <BiLogOut /> Logout </button>
        </div>
      </div>
    </>
  )
}

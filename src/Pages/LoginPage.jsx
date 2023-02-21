import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

import { BsArrowLeft } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { loginFunc } = useUserAuth();

    const navigateAfter = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await loginFunc(email, password);
            navigateAfter('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
                position: "top-right",
                style: {
                    "border": "1px solid #151E3F"
                }
            });
        }
    }, [error]);

    return (
        <div className="login-page w-full h-screen">
            <form className='p-5 w-3/12 rounded-md shadow-md flex flex-col gap-3' onSubmit={handleSubmit}>
                <Toaster />
                <Helmet>
                    <title>
                        Login
                    </title>
                </Helmet>
                <h1 className='text-3xl flex gap-1 items-center'>Login <BiLogIn /></h1>
                <hr />
                <label htmlFor="email">Email</label>
                <input className='w-full p-1 rounded-md text-black' type="email" name="email" id="email" placeholder='Masukkan Email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Kata Sandi</label>
                <input className='w-full p-1 rounded-md text-black' type="password" name="password" id="password" placeholder='Masukkan Kata Sandi' onChange={(e) => setPassword(e.target.value)} />
                <button className='p-2 rounded-md cursor-pointer w-2/4 m-auto'>Login</button>
                <Link to='/'> <p className='text-center text-sm flex items-center gap-1'> <BsArrowLeft /> Batal</p> </Link>
            </form>
        </div>

    )
}
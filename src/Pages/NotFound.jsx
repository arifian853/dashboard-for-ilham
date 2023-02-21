import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className="main text-center">
                <Helmet>
                    <title>
                        404 Not Found
                    </title>
                </Helmet>
                <h1 className='text-3xl'>404</h1>
                <hr />
                <p>Halaman tidak tersedia</p>
                <br />
                <Link to='/dashboard'> Kembali </Link>
            </div>
        </div>
    )
}

'use client';
import React from 'react'
import userRole from '../hooks/userRole';
import Link from 'next/link';
const Dashboard = () => {
  const {isloading} = userRole();
  if(isloading ) return null;
  
  return (
    <>
      
        <Link href={'/dashboard'}>
          <button className='bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition duration-300'>
            Dashboard
          </button>
        </Link>
      
    </>
  )
}

export default Dashboard
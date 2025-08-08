'use client';
import React from 'react'
import userRole from '../hooks/useUser';
import Link from 'next/link';


const Dashboard = () => {
  const { isLoading } = userRole();
  if (isLoading) return null;

  return (
    <>

      <Link href={'/dashboard'}>
        <button className='bg-none text-white sm:bg-green-400 px-4 py-1 rounded-md hover:bg-green-600 transition duration-300'>
          <svg className='inline-block sm:hidden' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 10v11h6v-7h6v7h6v-11L12,3z" />
          </svg>
          <span className="hidden sm:inline-block">Dashboard</span>

        </button>
      </Link>

    </>
  )
}

export default Dashboard
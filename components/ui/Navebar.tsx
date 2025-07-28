import React from 'react'
import { ModeToggle } from '@/components/ui/Mode'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Dashboard from "@/components/ui/Dashboard";
const Navebar = () => {
    return (
        <nav className="border-b ">
            <div className='flex items-center justify-between p-2   w-[90vw] mx-auto   '>
                <div className="text-lg font-bold text-green-500">
                    ColMeet
                </div>


                <div className="flex items-center justify-evenly space-x-4">
                    <Dashboard />
                    <ModeToggle />
                    <div className='text-black font-semibold dark:text-white'>

                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>




            </div>

        </nav>
    )
}

export default Navebar
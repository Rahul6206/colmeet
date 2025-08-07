import React from 'react'
import { ModeToggle } from '@/components/ui/Mode'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Dashboard from "@/components/ui/Dashboard";
import Link from 'next/link';
const Navebar = () => {
    return (
        <nav className="border-b ">
            <div className='flex items-center justify-between p-2   w-[90vw] mx-auto   '>
                <div className="text-lg font-bold text-green-500">
                   <Link href={'/'}> ColMeet</Link>
                </div>


                <div className="flex items-center justify-evenly space-x-4">
                    <SignedIn>
                    <Dashboard />
                    </SignedIn>
                    <ModeToggle />
                    <div className='text-black font-semibold dark:text-white'>

                        <SignedOut>
                            <SignInButton forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
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
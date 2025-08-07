'use client';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import SplitText from "@/components/ui/SplitText";
import { MagicCard } from "@/components/magicui/magic-card";
import { GlowingEffectDemoSecond } from "@/components/ui/Herogrid";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useUser, SignIn, } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {AlertPage} from '@/components/ui/AlertPage'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { log } from 'console';


export default function Home() {

  const router = useRouter();

const { isSignedIn, user } = useUser();
function handleCreateMeeting(){
  
  
  
 
    return router.push(`/dashboard`)

  };


  return (
    <div className="px-4 sm:px-6 lg:px-8  h-[80vh] w-full relative" >

      <GridPattern
        width={110}
        height={110}
        x={5}
        y={5}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(w-full,red,transparent)]",
        )}
      />


      <div className=" flex flex-col items-center justify-center h-full gap-4">
        <div className='flex flex-col items-center justify-center gap-4'>

          <SplitText
            text="Video Call Intreviews are Here!"
            className="text-6xl font-bold text-center"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="250px"
            textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Welcome to Our Platform"
            className="text-4xl font-bold text-center"
            delay={120}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className='flex items-center justify-evenly w-lvh '>
          <SignedOut>
          <AlertPage/>
        </SignedOut>
        <SignedIn>
          <InteractiveHoverButton onClick={handleCreateMeeting}>Dashboard</InteractiveHoverButton>
        </SignedIn>

        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 w-full h-fit mt-12'>
        <div className='flex items-center justify-center w-full'>
          <p className='text-4xl font-bold text-center'>Features of the Colmeet Website</p>
        </div>
        <div className="mt-2 ">
          {/* <MagicCard className=' rounded-xl shadow-none' >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <img src="./vercel.svg" alt="Feature 1" width={120} height={80} />
              <h3 className="text-xl font-semibold">Seamless Video Interviews</h3>
              <p className="text-center text-gray-600">Conduct interviews with high-quality video and audio, directly from your browser.</p>
            </div>
          </MagicCard> */}

          <GlowingEffectDemoSecond />

        </div>
      </div>
      <footer className="w-full py-8 mt-12 border-t border-gray-200">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">© 2023 Colmeet. All rights reserved.</p>
          <p className="text-sm">Made with <span className="text-red-500">❤️</span> by the Colmeet Team</p>
          <p className="text-sm">
            Follow us on{' '}
            <a
              href="https://twitter.com/colmeet"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            for updates!
          </p>
          <p className="text-sm">
            Contact us at{' '}
            <a
              href="mailto:contact@colmeet.com"
              className="text-blue-500 hover:underline"
            >
              contact@colmeet.com
            </a>
          </p>
        </div>
      </footer>


    </div>
  );
}

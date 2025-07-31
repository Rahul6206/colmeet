"use client";

import { useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { useState } from 'react';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import LoaderUI from '@/components/ui/LoodingUI';
import MeetingSetup from '@/components/ui/MeetingSetup';
import MeetingRoom from '@/components/ui/MeetingRoom';
import useGetCallById from '@/components/hooks/useGetCallById';

interface Params { 
  [key: string]: string | string[];
}

export interface ProductPageParams extends Params { 
  id: string;
}

const Meetings =  () => {
const { id } = useParams<ProductPageParams>();  
  // const {id}= useParams();
  
  const { call, isCallLoading } = useGetCallById(id);
  const {isLoaded} =useUser();
   const [isSetupComplete, setIsSetupComplete] = useState(false);
  if (!isLoaded) return <LoaderUI />;

  if (!call) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Meeting not found</p>
      </div>
    );
  }

  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  )
}

export default Meetings
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import React from 'react'

const userRole = () => {
    const {user}= useUser();

    const Userdata= useQuery(api.users.getUserByClerkId, {
        clerkId: user?.id || '' 
    });
    const isloading = Userdata === undefined;

  return {
    isloading,
    
  }
    
  
}

export default userRole
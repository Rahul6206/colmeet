import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';



interface UseUserRoleResult {
  isLoading: boolean;
  
}

const useUserRole = (): UseUserRoleResult => {
  const { user } = useUser();

  const userRoleData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || '' // Provides an empty string if user?.id is undefined, avoiding errors
  });

  const isLoading = userRoleData === undefined; // Check if data is still loading

  return {
    isLoading
  };
};

export default useUserRole;

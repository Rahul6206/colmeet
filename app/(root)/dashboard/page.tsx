"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUICK_ACTIONS } from '@/Constant/main';
import ActionCard from '@/components/ui/ActionCard';
import MeetingDialog from '@/components/ui/MeetingDialog';
import { useUser,SignIn } from '@clerk/nextjs';
import LoaderUI from '@/components/ui/LoodingUI'; 

const Dashboard = () => {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser()

  // Declare all hooks at the top level, before any conditional returns
  const [modalType, setModalType] = useState<"start" | "join">();
  const [showModal, setShowModal] = useState(false);

  if (!isLoaded) {
    return <LoaderUI/>
  }

  if (!isSignedIn) {
    return <SignIn/>
  }

  
  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  return (
    <div>
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome {user.firstName}
        </h1>
        <p className="text-muted-foreground mt-2 not-dark:text-gray-700">
            Access your upcoming interviews and preparations
        </p>
      </div>
      
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>
          <MeetingDialog
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />

    </div>
  )
}

export default Dashboard

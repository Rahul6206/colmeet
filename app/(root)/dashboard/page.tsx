"use client";

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUICK_ACTIONS } from '@/Constant/main';
import userRole from '@/components/hooks/userRole';
import ActionCard from '@/components/ui/ActionCard';
import MeetingDialog from '@/components/ui/MeetingDialog';
import { useUser,SignIn } from '@clerk/nextjs';
import LoaderUI from '@/components/ui/LoodingUI';



  


const dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <LoaderUI/>
  }

  if (!isSignedIn) {
    return <SignIn/>
  }


  const router = useRouter();
  const { isloading, Role } = userRole();
  const [modalType, setModalType] = useState<"start" | "join">();
  const isInterviewer = Role === 'interviewer';
  const [showModal, setShowModal] = useState(false);
    
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
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates effectively"
            : "Access your upcoming interviews and preparations"}
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

export default dashboard
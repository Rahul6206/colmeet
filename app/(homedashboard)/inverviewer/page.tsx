"use client";

import React from 'react';
import { QUICK_ACTIONS } from '@/Constant/main';
import userRole from '@/components/hooks/userRole';
import ActionCard from '@/components/ui/ActionCard';
const dashboard = () => {
  // const { isloading, Role } = userRole();
  const isInterviewer = 'interviewer' === 'interviewer';
  const handleQuickAction = (title:string) => {
    // Handle quick action click
    console.log(`Quick action clicked: ${title}`);
  };
  return (
    <div>
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome back!
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates effectively"
            : "Access your upcoming interviews and preparations"}
        </p>
      </div>
        {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          </>
        ): null}


    </div>
  )
}

export default dashboard
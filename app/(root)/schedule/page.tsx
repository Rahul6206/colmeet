"use client";
import React from 'react'
import LoaderUI from "@/components/ui/LoodingUI";
import userRole from "@/components/hooks/useUser";
import InterviewScheduleUI from "./InterviewScheduleUI";

function Schedule() {
  

  const { isLoading } = userRole();
  if (isLoading) return <LoaderUI />;
  return <InterviewScheduleUI />;
}


export default Schedule
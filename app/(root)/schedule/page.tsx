"use client";
import React from 'react'
import LoaderUI from "@/components/ui/LoodingUI";
import userRole from "@/components/hooks/useUser";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

function Schedule() {
  const router = useRouter();

  const { isloading } = userRole();
  if (isloading) return <LoaderUI />;
  return <InterviewScheduleUI />;
}


export default Schedule
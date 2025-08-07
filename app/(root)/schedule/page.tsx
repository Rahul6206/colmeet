"use client";
import React from 'react'
import LoaderUI from "@/components/ui/LoodingUI";
import userRole from "@/components/hooks/userRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

function Schedule() {
  const router = useRouter();

  const { Role, isloading } = userRole();
 const isInterviewer = Role === "interviewer" || "candidate";
  if (isloading) return <LoaderUI />;
  if (!isInterviewer) return router.push("/");

  return <InterviewScheduleUI />;
}


export default Schedule
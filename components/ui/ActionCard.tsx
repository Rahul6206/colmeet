"use client";

import React from "react";
import { QuickActionType } from "@/Constant/main";
import SpotlightCard from "./SportLightCard";


function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (


    <div onClick={onClick} >
      <SpotlightCard className="custom-spotlight-card cursor-pointer " spotlightColor="rgba(169, 246, 255, 0.632)" >

        {/* ACTION GRADIENT */}
        <div
          className={`absolute inset-0   ${action.gradient.dark} not-dark:${action.gradient.light} opacity-100 group-hover:opacity-50 transition-opacity`}
        />

        {/* ACTION CONTENT WRAPPER */}
        <div className="relative p-0 sm:p-6 size-full">
          <div className="space-y-3">
            {/* ACTION ICON */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-${action.color}/5 group-hover:scale-110 transition-transform`}
            >
              <action.icon className={`h-12 w-12`} />
            </div>

            {/* ACTION DETAILS */}
            <div className="space-y-1">
              <h3 className="font-bold text-xl group-hover:text-primary not-dark:text-black transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-muted-foreground ">{action.description}</p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default ActionCard;
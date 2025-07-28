"use client";

import React from "react";
import { QuickActionType } from "@/Constant/main";
import SpotlightCard from "./SportLightCard";

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    
  
<div onClick={onClick} >
   <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(169, 246, 255, 0.632)" >
        
      {/* ACTION GRADIENT */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${action.gradient.dark} not-dark:${action.gradient.light} opacity-100 group-hover:opacity-50 transition-opacity`}
      />

      {/* ACTION CONTENT WRAPPER */}
      <div className="relative p-6 size-full">
        <div className="space-y-3">
          {/* ACTION ICON */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-${action.color}/5 group-hover:scale-110 transition-transform`}
          >
            <action.icon className={`h-6 w-6 text-${action.color}`} />
          </div>

          {/* ACTION DETAILS */}
          <div className="space-y-1">
            <h3 className="font-semibold text-xl group-hover:text-primary transition-colors not-dark:text-accent">
              {action.title}
            </h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </div>
        </div>
      </div>
    </SpotlightCard>
    </div>
  );
}

export default ActionCard;
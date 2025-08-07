import useMeeting from "@/components/hooks/useMeeting";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./button";
import { MagicCard } from "../magicui/magic-card";

type Interview = Doc<"interviews">;

function MeetingCard({  intervie }: {  intervie: Interview }) {
  const { joinMeeting } = useMeeting();

  const status = getMeetingStatus( intervie);
  const formattedDate = format(new Date( intervie.startTime), "EEEE, MMMM d · h:mm a");

  return (
      <MagicCard className=' rounded-xl shadow-none' gradientSize={100}>
    <Card className="z-10">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground not-dark:text-black">
            <CalendarIcon className="h-4 w-4 not-dark:text-black" />
            {formattedDate}
          </div>

          <Badge
            variant={
              status === "live" ? "default" : status === "upcoming" ? "secondary" : "outline"
            }
            
          >
            {status === "live" ? "Live Now" : status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>

        <CardTitle className="not-dark:text-black" >{ intervie.title}</CardTitle>

        { intervie.description && (
          <CardDescription className="line-clamp-2 not-dark:text-black">{ intervie.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {status === "live" && (
          <Button className="w-full" onClick={() => joinMeeting( intervie.streamCallId)}>
            Join Meeting
          </Button>
        )}

        {status === "upcoming" && (
          <Button variant="outline" className="w-full" disabled>
            Waiting to Start
          </Button>
        )}
      </CardContent>
    </Card>
    </MagicCard>
  );
}
export default MeetingCard;
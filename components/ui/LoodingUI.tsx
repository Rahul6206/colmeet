import { LoaderIcon } from "lucide-react";

function LoaderUI() {
  
  return (
    <div className="h-[calc(100vh-4rem-1px)] w-full flex items-center justify-center relative ">
      <LoaderIcon className="h-8 w-8 animate-spin text-muted-foreground absolute" />
    </div>
  );
}
export default LoaderUI;
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import {  SignInButton } from '@clerk/nextjs'
export function AlertPage() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <InteractiveHoverButton>Get Started</InteractiveHoverButton>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">Singin to continue</AlertDialogTitle>
          <AlertDialogDescription className="not-dark:text-black">
            Please sign in to access all features and continue using the application securely.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <div className="bg-primary p-1.5 px-3 rounded-xl text-black hover:bg-purple-500">

          <SignInButton/>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

# Colmeet - Video Calling Interview Platform

![Screenshot of a colmeet Image.](/assets/ReadmeImg.png)

## Live Demo:- https://colmeet.vercel.app/
# Screen Sorts
![Screenshot of a colmeet Image.](/assets/Homepage.png)
![Screenshot of a colmeet Image.](/assets/Dashboard.png)
![Screenshot of a colmeet Image.](/assets/Chatmeeting.png)
![Screenshot of a colmeet Image.](/assets/ScreenSharing.png)

## ✨ Features
- 🧑‍💻 Live Code Editor for real-time coding assessments
- 🖥️ Screen Sharing to review projects or workflows
- 💬 Instant Chat for seamless communication
- 📅 Meeting Scheduler to plan interviews effortlessly
- 🔒 Secure Video Calls with high-quality streaming

## 🛠️ Technology Stack
- **Framework :** [Next.js](https://nextjs.org) 15 with App Router
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) for responsive, utility-first styling
- **Animations :** [Shadcn UI](https://ui.shadcn.com/) for sophisticated animations and transitions
- **Development :** TypeScript for type safety
- **Authencation :** [Clerk](https://clerk.com/) for Secure Auth.
- **Video & Audio :** [Stream](https://getstream.io/) for real time High Quality video and Audio conferencing
- **Database :** [Convex](https://www.convex.dev/) the open-source reactive database for app developers

## 🔧 Installation & Setup
1. Clone the project:
```
git clone https://github.com/Rahul6206/colmeet.git
cd colmeet
```

2. Install the dependencies:
```
npm install
```
3. Set up environment variables:
   ```
   # create .env.local file
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   
   # Deployment used by `npx convex dev`
   
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   
   # stream devlopment keys:
   
   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=

   # clerk devlopment keys:
   
   NEXT_PUBLIC_CLERK_FRONTEND_API_URL=
   CLERK_WEBHOOK_SECRET=
   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=
   
   ```
4. Run the development server:
   ```
   npm run dev
   npx convex dev
   ```
5. Open http://localhost:3000 in your browser.

## 👏 Acknowledgements:
- Design inspiration from modern  websites
- Icons and animations inspired by current web design trends
- Stream for Providing High Quality video,audio and chat messages
- Clerk for Secure Authencation
- Convex use for everything is just TypeScript
Developed by Rahul Kumar  - [LinkedIn](www.linkedin.com/in/rahul-kumar-pramanik-799933352) | [GitHub](https://github.com/Rahul6206)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

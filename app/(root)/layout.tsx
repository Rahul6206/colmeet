import React from 'react'
import StreamVideoProvider from '@/components/Provider/StreamProvider'
const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <StreamVideoProvider>{children}</StreamVideoProvider>
  )
}

export default layout
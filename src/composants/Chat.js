import React from 'react'
import SidebarPerson from './SidebarPerson'
import { Outlet } from 'react-router-dom'

function Chat() {
  return (
    <div className='flex min-h-[100vh]'>
        <SidebarPerson/>
        <Outlet/>
    </div>
  )
}

export default Chat
import React from 'react'
import LiveButton from './LiveButton';

export default function LiveHeader() {
  return (
     <header className="flex my-6 justify-center w-[100%]">
          <LiveButton url="/admin/garbage">Live-tracking</LiveButton>
          <LiveButton url="/admin/garbage/household">House-Hold tracking</LiveButton>
          <LiveButton url="/admin/garbage/allReports">All Reports</LiveButton>
     </header>
  )
}

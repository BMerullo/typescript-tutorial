"use client"

import Profile from "./componets/Profile"
import Settings from "./componets/Settings"
import { UserProvider } from "./context/UserContext"

export default function Home() {
  return (
    <div>
      <UserProvider>
        <Profile />
        <Settings />
      </UserProvider>
    </div>
  )
}

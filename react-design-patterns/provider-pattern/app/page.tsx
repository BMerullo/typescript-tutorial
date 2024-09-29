"use client"

import Profile from "./components/Profile"
import { UserProvider } from "./context/UserContext"
import Settings from "./components/settings"

export default function Home() {
  return (
    <UserProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
        <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
          <Profile />
          <Settings />
        </div>
      </div>
    </UserProvider>
  )
}

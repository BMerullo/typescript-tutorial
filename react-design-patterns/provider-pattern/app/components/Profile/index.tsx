import React from "react"
import { useUser } from "@/app/hooks/useUser"

const Profile: React.FC = () => {
  const { user } = useUser()
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-black">User Profile</h2>
      {user ? (
        <div className="text-black">
          <p className="text-lg">Name: {user.name}</p>
          <p className="text-lg">Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500">No user Data Available</p>
      )}
    </div>
  )
}

export default Profile

import React from "react"
import { useUser } from "@/app/hooks/useUser"

const Profile: React.FC = () => {
  const { user } = useUser()
  return (
    <div className="p-4 bg-gray-100 rounded lg mb-8">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-black ">User Profile</h2>
      </div>
      <div className="flex justify-center">
        {user ? (
          <div>
            <p className="text-lg text-black">Name: {user.name}</p>
            <p className="text-lg text-black">Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-red-500">No user data available</p>
        )}
      </div>
    </div>
  )
}

export default Profile

import React from "react"
import { useUser } from "@/app/hooks/useUser"

const Settings: React.FC = () => {
  const { setUser } = useUser()

  const updateUser = () => {
    setUser({
      id: 1,
      name: "Bob Merullo",
      email: "bob@gmail.com",
    })
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg ">
      <div className=" flex justify-center">
        <h2 className="text-2xl font-bold text-black">Settings</h2>
      </div>
      <div className="flex justify-center">
        <button
          onClick={updateUser}
          className="mt-2 px-4 py-2 bg-blue-500 text-white-rounded "
        >
          Update User Data
        </button>
      </div>
    </div>
  )
}

export default Settings

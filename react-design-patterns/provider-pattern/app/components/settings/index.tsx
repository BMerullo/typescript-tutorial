import React, { useState, ChangeEvent, FormEvent } from "react"
import { useUser } from "../../hooks/useUser"
import { UserI } from "../../types/User"

const Settings: React.FC = () => {
  const { setUser } = useUser() // Assume useUser is typed elsewhere

  // Step 2: Define the form data type
  const [formData, setFormData] = useState<Omit<UserI, "id"> & { id: string }>({
    id: "",
    name: "",
    email: "",
  })

  // Step 3: Handle input changes (typed as ChangeEvent for input elements)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Step 4: Handle form submission (typed as FormEvent)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Prevent default form behavior
    setUser({
      id: parseInt(formData.id), // Convert id to number
      name: formData.name,
      email: formData.email,
    })
  }

  return (
    <div className="p-4 bg-black rounded-lg">
      <h2 className="text-2xl font-bold text-white">User Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-black" htmlFor="id">
          Id
        </label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="text-black"
        />
        <label className="text-black" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="text-black"
        />
        <label className="text-black" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-black"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update User Data
        </button>
      </form>
    </div>
  )
}

export default Settings

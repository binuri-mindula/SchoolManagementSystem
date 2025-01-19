import React from 'react'
import Sidebar from '../../components/Sidebar'
import UpdateLecturerForm from '../../components/UpdateLecturerForm'

function UpdateLecturer() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex items-center justify-center flex-1 ">
      <div className="w-full max-w-lg">
        <UpdateLecturerForm />
      </div>
    </div>
  </div>
  )
}

export default UpdateLecturer

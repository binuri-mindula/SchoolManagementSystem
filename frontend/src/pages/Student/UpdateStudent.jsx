import React from 'react'
import Sidebar from '../../components/Sidebar'
import UpdateForm from '../../components/UpdateForm'

function UpdateStudent() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex flex-1 justify-center items-center ">
      <div className="w-full max-w-lg">
        <UpdateForm />
      </div>
    </div>
  </div>
  )
}

export default UpdateStudent

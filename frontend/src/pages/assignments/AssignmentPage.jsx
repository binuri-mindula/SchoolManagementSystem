import React from 'react';
import AssignmentForm from '../../components/AssignmentForm';
import Sidebar from '../../components/Sidebar';

const AssignmentPage = () => {
    return (
        

<div className="flex min-h-screen bg-gray-100">
<Sidebar />
<div className="flex flex-1 justify-center items-center ">
  <div className="w-full max-w-lg">
  <AssignmentForm />
  </div>
</div>
</div>
    );
};

export default AssignmentPage;

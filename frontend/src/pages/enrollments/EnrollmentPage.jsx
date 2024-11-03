// src/pages/enrollments/EnrollmentPage.jsx
import React from 'react';
import EnrollmentForm from '../../components/EnrollmentForm';
// import EnrollmentList from '../../components/EnrollmentList';
import Sidebar from '../../components/Sidebar';

const EnrollmentPage = () => {
    return (
        
        <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-1 justify-center items-center ">
          <div className="w-full max-w-lg">
          
          <EnrollmentForm />
          </div>
        </div>
      </div>
    );
};

export default EnrollmentPage;

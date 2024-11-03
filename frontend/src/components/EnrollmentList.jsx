import React, { useEffect, useState } from 'react';

const EnrollmentList = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
  
        fetch('/enrollments/all')
            .then(response => response.json())
            .then(data => setEnrollments(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`/enrollments/delete/${id}`, { method: 'DELETE' })
            .then(() => {
                setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enrollment List</h2>
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Student</th>
                        <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Course</th>
                        <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {enrollments.map(enrollment => (
                        <tr key={enrollment.id}>
                            <td className="py-2 px-4 border-b border-gray-300">{enrollment.student.name}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{enrollment.course.name}</td>
                            <td className="py-2 px-4 border-b border-gray-300">
                                <button 
                                    onClick={() => handleDelete(enrollment.id)} 
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrollmentList;

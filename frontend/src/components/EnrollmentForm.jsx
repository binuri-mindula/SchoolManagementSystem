import React, { useEffect, useState } from 'react';

const EnrollmentForm = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        
        fetch('/students/all')
            .then(response => response.json())
            .then(data => setStudents(data));

        fetch('/courses/all')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const enrollment = {
            studentId: selectedStudent,
            courseId: selectedCourse,
        };

        fetch('/enrollments/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrollment),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
               
                setSelectedStudent('');
                setSelectedCourse('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Enroll Student in Course</h2>

            <div className="mb-6">
                <label htmlFor="student" className="block text-sm font-medium text-gray-700 mb-2">Select Student</label>
                <select
                    id="student"
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
                    required
                >
                    <option value="">Select Student</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>{student.name}</option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
                <select
                    id="course"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
                    required
                >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200 ease-in-out"
            >
                Enroll
            </button>
        </form>
    );
};

export default EnrollmentForm;

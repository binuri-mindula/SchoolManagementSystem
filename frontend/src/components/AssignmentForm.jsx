import React, { useEffect, useState } from 'react';

const AssignmentForm = () => {
    const [lecturers, setLecturers] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedLecturer, setSelectedLecturer] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        fetch('/lecturers/all')
            .then(response => response.json())
            .then(data => setLecturers(data));

        fetch('/courses/all')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const assignment = {
            lecturerId: selectedLecturer,
            courseId: selectedCourse,
        };

        fetch('/assignments/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(assignment),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Assign Lecturer to Course</h2>

                <div className="mb-6">
                    <label htmlFor="lecturer" className="block text-sm font-medium text-gray-700 mb-2">Select Lecturer</label>
                    <select
                        id="lecturer"
                        value={selectedLecturer}
                        onChange={(e) => setSelectedLecturer(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
                        required
                    >
                        <option value="">Select Lecturer</option>
                        {lecturers.map(lecturer => (
                            <option key={lecturer.id} value={lecturer.id}>{lecturer.name}</option>
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
                    Assign
                </button>
            </form>
        </div>
    );
};

export default AssignmentForm;

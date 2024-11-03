import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/students/all");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/delete/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-6 text-left font-semibold">ID</th>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Age</th>
              <th className="py-3 px-6 text-left font-semibold">Address</th>
              <th className="py-3 px-6 text-left font-semibold">Gender</th>
              <th className="py-3 px-6 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.name}</td>
                <td className="py-3 px-6">{student.age}</td>
                <td className="py-3 px-6">{student.address}</td>
                <td className="py-3 px-6">{student.gender}</td>
                <td className="py-3 px-6 flex space-x-4">
                  <Link 
                    to={`/updatestudent/${student.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Update
                  </Link>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LecturerList = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/lecturers/all");
        console.log("API Response:", response.data); // Log the API response
        setLecturers(response.data);
      } catch (error) {
        console.error("Error fetching lecturers", error);
      }
    };

    fetchLecturers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/lecturers/delete/${id}`);
      setLecturers(lecturers.filter((lecturer) => lecturer.id !== id));
    } catch (error) {
      console.error("Error deleting lecturer", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">lecturer List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="text-gray-700 bg-gray-200">
              <th className="px-6 py-3 font-semibold text-left">ID</th>
              <th className="px-6 py-3 font-semibold text-left">Name</th>
              <th className="px-6 py-3 font-semibold text-left">Age</th>
              <th className="px-6 py-3 font-semibold text-left">Address</th>
              <th className="px-6 py-3 font-semibold text-left">Gender</th>
              <th className="px-6 py-3 font-semibold text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map((lecturer) => (
              <tr key={lecturer.id} className="transition-colors border-b hover:bg-gray-50">
                <td className="px-6 py-3">{lecturer.id}</td>
                <td className="px-6 py-3">{lecturer.name}</td>
                <td className="px-6 py-3">{lecturer.age}</td>
                <td className="px-6 py-3">{lecturer.address}</td>
                <td className="px-6 py-3">{lecturer.gender}</td>
                <td className="flex px-6 py-3 space-x-4">
                  <Link 
                    to={`/updatelecturer/${lecturer.id}`}
                    className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </Link>
                  <button
                    className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDelete(lecturer.id)}
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

export default LecturerList;

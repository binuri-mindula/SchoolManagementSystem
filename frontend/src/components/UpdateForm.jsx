import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    address: "",
    gender: ""
  });
  const [birth_certificateFile, setBirth_certificateFile] = useState(null); 
  const [statusMessage, setStatusMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  
  const handleFileChange = (e) => {
    setBirth_certificateFile(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append("student", JSON.stringify(student)); 
    if (birth_certificateFile) {
      formData.append("file", birth_certificateFile); 
    }

    try {
      await axios.put(`http://localhost:8080/students/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatusMessage("Student updated successfully!");
      setTimeout(() => navigate("/students"), 2000);
    } catch (error) {
      console.error("Error updating student", error);
      setStatusMessage("Failed to update student. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Student</h2>

        {statusMessage && (
          <div
            className={`mb-4 p-3 rounded ${
              statusMessage.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={student.gender}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Birth Certificate (PDF)</label> */}
            <input
              type="file"
              accept="application/pdf" 
              onChange={handleFileChange} 
              className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;

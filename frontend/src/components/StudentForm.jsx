import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    address: "",
    gender: ""
  });
  
  const [birth_certificateFile, setBirth_certificateFile] = useState(null); 
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState("");
  const navigate = useNavigate();

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
    formData.append("file", birth_certificateFile); 

    try {
      await axios.post("http://localhost:8080/students/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatusMessage("Student added successfully!");
      setStatusType("success");
      setStudent({
        name: "",
        age: "",
        address: "",
        gender: ""
      });
      setBirth_certificateFile(null); 
      setTimeout(() => navigate("/students"), 2000);
    } catch (error) {
      setStatusMessage("Error adding student. Please try again.");
      setStatusType("error");
      console.error("Error adding student", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Add Student</h2>

        {statusMessage && (
          <div
            className={`mb-2 p-4 rounded-md text-center font-medium shadow-md ${
              statusType === "success" ? "bg-green-50 border border-green-400 text-green-700" : "bg-red-50 border border-red-400 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student's name"
              value={student.name}
              onChange={handleChange}
              required
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter student's age"
              value={student.age}
              onChange={handleChange}
              required
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={student.address}
              onChange={handleChange}
              required
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              placeholder="Enter gender"
              value={student.gender}
              onChange={handleChange}
              required
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Certificate (PDF)</label>
            <input
              type="file"
              accept="application/pdf" 
              onChange={handleFileChange} 
              required
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 text-lg font-semibold text-white transition-transform duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;

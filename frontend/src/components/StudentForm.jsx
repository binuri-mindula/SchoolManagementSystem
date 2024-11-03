import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    birth_certificate: ""
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/students/add", student);
      setStatusMessage("Student added successfully!");
      setStatusType("success");
      setStudent({
        name: "",
        age: "",
        address: "",
        gender: "",
        birth_certificate: ""
      });
      setTimeout(() => navigate("/students"), 2000);
    } catch (error) {
      setStatusMessage("Error adding student. Please try again.");
      setStatusType("error");
      console.error("Error adding student", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Student</h2>

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
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Certificate Path</label>
            <input
              type="text"
              name="birth_certificate"
              placeholder="Enter birth certificate path"
              value={student.birth_certificate}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-200"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
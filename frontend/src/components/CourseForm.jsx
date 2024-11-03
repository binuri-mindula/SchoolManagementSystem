import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: "",
    code: "",
    description: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/courses/add", course);
      setStatusMessage("Course added successfully!");
      setStatusType("success");
      setCourse({
        name: "",
        code: "",
        description: "",
      });
      setTimeout(() => navigate("/allcourses"), 2000);
    } catch (error) {
      setStatusMessage("Error adding course. Please try again.");
      setStatusType("error");
      console.error("Error adding course", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Course</h2>

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
            <label className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter course name"
              value={course.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Course Code</label>
            <input
              type="text"
              name="code"
              placeholder="Enter course code"
              value={course.code}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              placeholder="Enter course description"
              value={course.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-200"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;

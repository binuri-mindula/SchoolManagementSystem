import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateLecturerForm = () => {
  const { id } = useParams();
  const [lecturer, setLecturer] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLecturer = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/lecturers/${id}`);
        setLecturer(response.data);
      } catch (error) {
        console.error("Error fetching lecturer data", error);
        setStatusMessage("Failed to fetch lecturer details. Please try again.");
      }
    };

    fetchLecturer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecturer({ ...lecturer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await axios.put(
            `http://localhost:8080/lecturers/update/${id}`,
            lecturer, // Sending JSON object
            {
              headers: {
                "Content-Type": "application/json", // Explicitly setting JSON
              },
            }
          
          
      );
      setStatusMessage("Lecturer updated successfully!");
      setTimeout(() => navigate("/alllecturers"), 2000); // Delay navigation to show success message
    } catch (error) {
      console.error("Error updating lecturer", error);
      setStatusMessage("Failed to update lecturer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Update Lecturer
        </h2>

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
            value={lecturer.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={lecturer.age}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={lecturer.address}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="gender"
            value={lecturer.gender}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-bold text-white transition duration-300 rounded ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Lecturer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateLecturerForm;

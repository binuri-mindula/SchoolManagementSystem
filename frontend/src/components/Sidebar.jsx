import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <h1 className="text-4xl p-4 font-signature text-center mt-4">Akura</h1>
      <ul className="mt-6 ml-5">
        <li className="p-4 hover:bg-gray-700">
          <Link to="/students">Add Student</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/allstudents">All Students</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/lecturers">Add Lecturer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


import StudentList from "../../components/StudentList";
import Sidebar from "../../components/Sidebar";

const AllStudents = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
     
        <div className="max-w-5xl mx-auto bg-white ">
          <StudentList />
        </div>
      
    </div>
  );
};

export default AllStudents;

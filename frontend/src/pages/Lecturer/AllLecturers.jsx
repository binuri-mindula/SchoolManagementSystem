import LecturerList from "../../components/LecturerList";
import Sidebar from "../../components/Sidebar";

const AllLecturers = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
     
        <div className="max-w-5xl mx-auto bg-white ">
          <LecturerList />
        </div>
      
    </div>
  );
};

export default AllLecturers;

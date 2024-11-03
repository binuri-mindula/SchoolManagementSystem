import LecturerForm from "../../components/LecturerForm";
import Sidebar from "../../components/Sidebar";

const AddLecturer = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center ">
        <div className="w-full max-w-lg">
          <LecturerForm/>
        </div>
      </div>
    </div>
  );
};

export default AddLecturer;

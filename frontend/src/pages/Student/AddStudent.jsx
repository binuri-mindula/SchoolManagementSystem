import StudentForm from "../../components/StudentForm";
import Sidebar from "../../components/Sidebar";

const AddStudent = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center ">
        <div className="w-full max-w-lg">
          <StudentForm />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

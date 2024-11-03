import CourseForm from "../../components/CourseForm";
import Sidebar from "../../components/Sidebar";

const AddCourse = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center ">
        <div className="w-full max-w-lg">
          <CourseForm />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

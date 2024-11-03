import CoursesList from "../../components/CoursesList";
import Sidebar from "../../components/Sidebar";

const AllCourses = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
     
        <div className="max-w-5xl mx-auto bg-white ">
          <CoursesList />
        </div>
      
    </div>
  );
};

export default AllCourses;

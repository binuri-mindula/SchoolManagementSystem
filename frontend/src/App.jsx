import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/Student/AddStudent";
import AllStudents from "./pages/Student/AllStudents";
import LandingPage from "./pages/LandingPage";
import UpdateStudent from "./pages/Student/UpdateStudent";
import AddLecturer from "./pages/Lecturer/AddLecturer";
import AllLecturers from "./pages/Lecturer/AllLecturers";
import AddCourse from "./pages/Course/AddCourse";
import AllCourses from "./pages/Course/AllCourses";
import AssignmentPage from "./pages/assignments/AssignmentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/students" element={<AddStudent />} />
        <Route path="/allstudents" element={<AllStudents />} />
        <Route path="/updatestudent/:id" element={<UpdateStudent />} />

        <Route path="/lecturers" element={<AddLecturer />} />
       <Route path="/alllecturers" element={<AllLecturers />} />
        <Route path="/updatelecturer/:id" element={<UpdateStudent />} /> 

        <Route path="/courses" element={<AddCourse />} />
        <Route path="/allcourses" element={<AllCourses />} />

        <Route path="/assignments" element={<AssignmentPage />} />
      </Routes>

     
    </Router>
  );
};

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/Student/AddStudent";
import AllStudents from "./pages/Student/AllStudents";
import LandingPage from "./pages/LandingPage";
import UpdateStudent from "./pages/Student/UpdateStudent";
import AddLecturer from "./pages/Lecturer/AddLecturer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/students" element={<AddStudent />} />
        <Route path="/allstudents" element={<AllStudents />} />
        <Route path="/updatestudent/:id" element={<UpdateStudent />} />

        <Route path="/lecturers" element={<AddLecturer />} />
        {/* <Route path="/alllecturers" element={<AllStudents />} />
        <Route path="/updatelecturer/:id" element={<UpdateStudent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;


package com.SchoolManagementSystem.controller;

import com.SchoolManagementSystem.entity.Student;
import com.SchoolManagementSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        return studentService.getStudentById(id).orElse(null);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@PathVariable Integer id, @RequestBody Student studentDetails) {
        return studentService.updateStudent(id, studentDetails);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Integer id) {
        studentService.deleteStudent(id);
    }
}


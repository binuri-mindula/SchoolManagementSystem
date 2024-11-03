package com.SchoolManagementSystem.controller;

import com.SchoolManagementSystem.entity.Student;
import com.SchoolManagementSystem.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public Student addStudent(@RequestParam("student") String studentJson, @RequestParam("file") MultipartFile file) {
        // Convert the JSON string to a Student object
        ObjectMapper objectMapper = new ObjectMapper();
        Student student;
        try {
            student = objectMapper.readValue(studentJson, Student.class);
        } catch (IOException e) {
            throw new RuntimeException("Failed to parse student data: " + e.getMessage());
        }

        // Upload the file and set the file name in the student object
        try {
            String fileName = studentService.uploadFile(file);
            student.setBirth_certificate(fileName);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file: " + e.getMessage());
        }

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

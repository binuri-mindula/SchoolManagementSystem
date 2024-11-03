package com.SchoolManagementSystem.service;

import com.SchoolManagementSystem.entity.Student;
import com.SchoolManagementSystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    private final String uploadDir = "uploads/";

    public Student addStudent(Student student) {
        return studentRepo.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    public Optional<Student> getStudentById(Integer id) {
        return studentRepo.findById(id);
    }

    public Student updateStudent(Integer id, Student studentDetails) {
        Student student = studentRepo.findById(id).orElseThrow(() -> new RuntimeException("Student not found"));
        student.setName(studentDetails.getName());
        student.setAge(studentDetails.getAge());
        student.setAddress(studentDetails.getAddress());
        student.setGender(studentDetails.getGender());
        student.setBirth_certificate(studentDetails.getBirth_certificate());
        return studentRepo.save(student);
    }

    public void deleteStudent(Integer id) {
        studentRepo.deleteById(id);
    }

    public String uploadFile(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new RuntimeException("Failed to upload file because it is empty.");
        }

        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        Path filePath = Paths.get(uploadDir + file.getOriginalFilename());
        Files.copy(file.getInputStream(), filePath);

        return file.getOriginalFilename();
    }
}

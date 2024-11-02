package com.SchoolManagementSystem.service;

import com.SchoolManagementSystem.entity.Student;
import com.SchoolManagementSystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

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
}


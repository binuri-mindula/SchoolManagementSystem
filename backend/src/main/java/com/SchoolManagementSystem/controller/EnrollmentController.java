package com.SchoolManagementSystem.controller;

import com.SchoolManagementSystem.entity.Enrollment;
import com.SchoolManagementSystem.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping("/enroll")
    public Enrollment enrollStudent(@RequestBody Enrollment enrollment) {
        return enrollmentService.enrollStudent(enrollment);
    }

    @GetMapping("/student/{studentId}")
    public List<Enrollment> getEnrollmentsForStudent(@PathVariable Integer studentId) {
        return enrollmentService.getEnrollmentsForStudent(studentId);
    }

    @GetMapping("/course/{courseId}")
    public List<Enrollment> getStudentsInCourse(@PathVariable Integer courseId) {
        return enrollmentService.getStudentsInCourse(courseId);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEnrollment(@PathVariable Integer id) {
        enrollmentService.deleteEnrollment(id);
    }
}



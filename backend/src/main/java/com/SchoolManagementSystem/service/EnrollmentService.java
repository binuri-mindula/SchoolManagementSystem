package com.SchoolManagementSystem.service;

import com.SchoolManagementSystem.entity.Enrollment;
import com.SchoolManagementSystem.repository.EnrollmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepo enrollmentRepo;

    public Enrollment enrollStudent(Enrollment enrollment) {
        return enrollmentRepo.save(enrollment);
    }

    public List<Enrollment> getEnrollmentsForStudent(Integer studentId) {
        return enrollmentRepo.findByStudentId(studentId);
    }

    public List<Enrollment> getStudentsInCourse(Integer courseId) {
        return enrollmentRepo.findByCourseId(courseId);
    }

    public void deleteEnrollment(Integer id) {
        enrollmentRepo.deleteById(id);
    }

}



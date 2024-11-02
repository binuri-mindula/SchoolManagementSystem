package com.SchoolManagementSystem.repository;

import com.SchoolManagementSystem.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepo extends JpaRepository<Enrollment, Integer> {
    List<Enrollment> findByStudentId(Integer studentId);

    List<Enrollment> findByCourseId(Integer courseId);
}

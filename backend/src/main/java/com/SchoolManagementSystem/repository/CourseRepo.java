package com.SchoolManagementSystem.repository;

import com.SchoolManagementSystem.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Integer> {
}

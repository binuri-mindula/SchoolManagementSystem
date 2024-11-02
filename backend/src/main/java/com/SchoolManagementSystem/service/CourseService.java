package com.SchoolManagementSystem.service;

import com.SchoolManagementSystem.entity.Course;
import com.SchoolManagementSystem.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public Course addCourse(Course course) {
        return courseRepo.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    public Optional<Course> getCourseById(Integer id) {
        return courseRepo.findById(id);
    }

    public Course updateCourse(Integer id, Course courseDetails) {
        Course course = courseRepo.findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        course.setName(courseDetails.getName());
        course.setCode(courseDetails.getCode());
        course.setDescription(courseDetails.getDescription());
        return courseRepo.save(course);
    }

    public void deleteCourse(Integer id) {
        courseRepo.deleteById(id);
    }
}



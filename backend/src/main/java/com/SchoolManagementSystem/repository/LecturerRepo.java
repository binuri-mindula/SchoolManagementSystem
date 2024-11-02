package com.SchoolManagementSystem.repository;

import com.SchoolManagementSystem.entity.Lecturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LecturerRepo extends JpaRepository<Lecturer, Integer> {
}

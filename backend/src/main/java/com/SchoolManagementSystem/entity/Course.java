package com.SchoolManagementSystem.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "courses")
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String code;
    private String description;

    // One course can have many lecturers
    @OneToMany(mappedBy = "course")
    @JsonBackReference
    private List<Lecturer> lecturers;
}



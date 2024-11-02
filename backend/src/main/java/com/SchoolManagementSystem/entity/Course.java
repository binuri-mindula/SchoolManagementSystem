package com.SchoolManagementSystem.entity;

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

    //one course can have many lecturers
    @OneToMany(mappedBy = "course")
    private List<Lecturer> lecturers;
}



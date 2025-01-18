package com.SchoolManagementSystem.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "lecturers")
@Data
public class Lecturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private int age;
    private String address;
    private String gender;

    // Many lecturers can do one course
    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonManagedReference
    private Course course;
}


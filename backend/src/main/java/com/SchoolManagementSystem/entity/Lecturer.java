package com.SchoolManagementSystem.entity;

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

    //many lecturers can do one course
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;


}


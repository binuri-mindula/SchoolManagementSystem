package com.SchoolManagementSystem.controller;

import com.SchoolManagementSystem.entity.Lecturer;
import com.SchoolManagementSystem.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lecturers")
@CrossOrigin(origins = "*")
public class LecturerController {

    @Autowired
    private LecturerService lecturerService;

    @PostMapping("/add")
    public Lecturer addLecturer(@RequestBody Lecturer lecturer) {
        return lecturerService.addLecturer(lecturer);
    }

    @GetMapping("/all")
    public List<Lecturer> getAllLecturers() {
        return lecturerService.getAllLecturers();
    }

    @GetMapping("/{id}")
    public Lecturer getLecturerById(@PathVariable Integer id) {
        return lecturerService.getLecturerById(id).orElse(null);
    }

    @PutMapping("/update/{id}")
    public Lecturer updateLecturer(@PathVariable Integer id, @RequestBody Lecturer lecturerDetails) {
        return lecturerService.updateLecturer(id, lecturerDetails);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteLecturer(@PathVariable Integer id) {
        lecturerService.deleteLecturer(id);
    }
}


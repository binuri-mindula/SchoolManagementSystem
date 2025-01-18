package com.SchoolManagementSystem.service;

import com.SchoolManagementSystem.entity.Lecturer;
import com.SchoolManagementSystem.repository.LecturerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LecturerService {

    @Autowired
    private LecturerRepo lecturerRepo;

    public Lecturer addLecturer(Lecturer lecturer) {
        return lecturerRepo.save(lecturer);
    }

    public List<Lecturer> getAllLecturers() {
        List<Lecturer> lecturers = lecturerRepo.findAll();
//        System.out.println("Number of Lecturers Fetched: " + lecturers.size());
        return lecturers;
    }


    public Optional<Lecturer> getLecturerById(Integer id) {
        return lecturerRepo.findById(id);
    }

    public Lecturer updateLecturer(Integer id, Lecturer lecturerDetails) {
        Lecturer lecturer = lecturerRepo.findById(id).orElseThrow(() -> new RuntimeException("Lecturer not found"));
        lecturer.setName(lecturerDetails.getName());
        lecturer.setAge(lecturerDetails.getAge());
        lecturer.setAddress(lecturerDetails.getAddress());
        lecturer.setGender(lecturerDetails.getGender());
        lecturer.setCourse(lecturerDetails.getCourse());
        return lecturerRepo.save(lecturer);
    }

    public void deleteLecturer(Integer id) {
        lecturerRepo.deleteById(id);
    }
}



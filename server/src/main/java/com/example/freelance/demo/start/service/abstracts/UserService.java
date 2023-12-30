package com.example.freelance.demo.start.service.abstracts;

import com.example.freelance.demo.start.entitiy.User;
import org.springframework.stereotype.Service;

import java.util.List;
public interface UserService {
    List<User> findAll();
    User findById(int id);
    void deleteById(int id);
    User save(User user);
    User getUserByFirstName(String firstName);
}

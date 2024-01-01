package com.example.freelance.demo.start.service.abstracts;

import com.example.freelance.demo.start.dto.CreateUserRequest;
import com.example.freelance.demo.start.entitiy.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
public interface UserService extends UserDetailsService {
    List<User> findAll();
    User findById(int id);
    void deleteById(int id);
    User save(User user);
    User getUserByFirstName(String Name);

    User createUser(CreateUserRequest request);
}

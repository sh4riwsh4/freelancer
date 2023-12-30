package com.example.freelance.demo.start.service.concretes;

import com.example.freelance.demo.start.DAO.UserRepository;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.service.abstracts.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(int id) {
        Optional<User> result= userRepository.findById(id);
        User user=null;
        user=result.get();
        return user;
    }

    @Override
    public void deleteById(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByFirstName(String userName) {
        return userRepository.getUserByFirstName(userName);
    }
}

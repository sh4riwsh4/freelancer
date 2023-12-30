package com.example.freelance.demo.start.RestController;

import com.example.freelance.demo.start.entitiy.Jobs;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.service.abstracts.JobsService;
import com.example.freelance.demo.start.service.abstracts.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {
    private UserService userService;
    private JobsService jobService;
    @Autowired
    public UserRestController(UserService userService,JobsService jobService){
        this.userService=userService;
        this.jobService=jobService;
    }
    @GetMapping("/users")
    public List<User> findAll(){
        return userService.findAll();
    }
    @GetMapping("/users/id/{usersId}")
    public User findById(@PathVariable int usersId){
        User user=userService.findById(usersId);
        return user;
    }
    @GetMapping("/users/firstName/{firstName}")
    public User getByUserName(@PathVariable String firstName){
        return userService.getUserByFirstName(firstName);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        user.setId(0);
        return userService.save(user);
    }
    @PutMapping("/users")
    public User updateUser(@RequestBody User user){return userService.save(user);}

    @DeleteMapping("/users/userId/{userId}")
    public  void deleteUser(@PathVariable int userId){
        User user=userService.findById(userId);
        userService.deleteById(userId);
    }
    @GetMapping("/users/userName/{userName}")
    public ResponseEntity<List<Jobs>> getUserJobs(@PathVariable String userName) {
        List<Jobs> jobs = jobService.getUserJobs(userName);
        return new ResponseEntity<>(jobs, HttpStatus.OK);
    }
}

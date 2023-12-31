package com.example.freelance.demo.start.RestController;

import com.example.freelance.demo.start.entitiy.Jobs;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.service.abstracts.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class JobsController {
    private JobsService jobsService;
    @Autowired
    public JobsController(JobsService jobsService){
        this.jobsService=jobsService;
    }
    @GetMapping("/jobs/all")
    public List<Jobs> findAll(){
        return jobsService.findAll();
    }
    @GetMapping("/jobs/active")
    public List<Jobs> findAllActive(){
        return jobsService.findAllActiveJobs();
    }
    @GetMapping("/jobs/id/{jobsId}")
    public Jobs findById(@PathVariable int jobsId){
        Jobs jobs=jobsService.findById(jobsId);
        return jobs;
    }
    @GetMapping("/jobs/user/{userName}")
    public List<Jobs> getUserJobs(@PathVariable String userName) {
        List<Jobs> jobs = jobsService.getUserJobs(userName);
        return jobs;
    }
    @PostMapping("/jobs")
    public Jobs addJobs(@RequestBody Jobs jobs){
        jobs.setId(0);
        return jobsService.save(jobs);
    }
    @PutMapping("/jobs")
    public Jobs updateJobs(@RequestBody Jobs jobs){return jobsService.save(jobs);}
    @DeleteMapping("/jobs/{jobsId}")
    public  void deleteUser(@PathVariable int jobsId){
        Jobs jobs=jobsService.findById(jobsId);
        jobsService.deleteById(jobsId);
    }

}

package com.example.freelance.demo.start.RestController;

import com.example.freelance.demo.start.entitiy.Jobs;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.service.abstracts.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("/PUBLIC/jobs/all")
    public List<Jobs> findAll(){
        return jobsService.findAll();
    }
    @GetMapping("/PUBLIC/jobs/active")
    public List<Jobs> findAllActive(){
        return jobsService.findAllActiveJobs();
    }
    @GetMapping("/ORTAK/jobs/id/{jobsId}")
    public Jobs findById(@PathVariable int jobsId){
        Jobs jobs=jobsService.findById(jobsId);
        return jobs;
    }
    @PostMapping("/ISVEREN/jobs")
    public Jobs addJobs(@RequestBody Jobs jobs){
        jobs.setId(0);
        return jobsService.save(jobs);
    }
    @PutMapping("/ISVEREN/jobs")
    public Jobs updateJobs(@RequestBody Jobs jobs){return jobsService.save(jobs);}
    @DeleteMapping("/ORTAK/jobs/{jobsId}")
    public  void deleteUser(@PathVariable int jobsId){
        Jobs jobs=jobsService.findById(jobsId);
        jobsService.deleteById(jobsId);
    }

}

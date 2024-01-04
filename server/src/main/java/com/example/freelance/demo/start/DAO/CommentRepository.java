package com.example.freelance.demo.start.DAO;
import com.example.freelance.demo.start.entitiy.Comment;

import com.example.freelance.demo.start.entitiy.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Integer> {
    List<Comment> findByTargetUser(User targetUser);

    @Query(value = "SELECT GetCommentsByUSerNAme(:username)", nativeQuery = true)
    String callYourFunction(@Param("username") String username);
}

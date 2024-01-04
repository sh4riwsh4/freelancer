package com.example.freelance.demo.start.RestController;

import com.example.freelance.demo.start.entitiy.Comment;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.service.abstracts.CommentService;
import com.example.freelance.demo.start.service.abstracts.UserService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class CommentRestController {

    private final UserService userService;
    private final CommentService commentService;

    public CommentRestController(UserService userService, CommentService commentService) {
        this.userService = userService;
        this.commentService = commentService;
    }

    @PostMapping("/ORTAK/addCOMMENT")
    public Comment addComment(@RequestParam String commenterUsername,
                              @RequestParam String targetUsername,
                              @RequestParam String content) {
        // Bu kısımları, gerçek kullanıcı bilgilerini alacak şekilde uygun bir şekilde düzenleyin
        User commenter = userService.getUserByUserName(commenterUsername);
        User targetUser = userService.getUserByUserName(targetUsername);
        return commentService.addComment(commenter, targetUser, content);
    }
    @GetMapping("/ORTAK/comment/{username}")
    public String getCommentsListByUsername(@PathVariable String username) {
        return commentService.getUserCommentsByUsername(username);
    }

}

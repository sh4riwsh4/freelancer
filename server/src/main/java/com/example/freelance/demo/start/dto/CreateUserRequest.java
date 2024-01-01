package com.example.freelance.demo.start.dto;

import com.example.freelance.demo.start.entitiy.Role;
import lombok.Builder;

import java.util.Set;

@Builder
public record CreateUserRequest(
    String name,
    String username,
    String password,
    Set<Role>  authorities
) {
}

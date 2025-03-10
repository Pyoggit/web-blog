package com.pyo.board_back.service;

import com.pyo.board_back.dto.response.user.GetSignInUserResponseDto;

import org.springframework.http.ResponseEntity;

public interface UserService {
    
    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);
    
}

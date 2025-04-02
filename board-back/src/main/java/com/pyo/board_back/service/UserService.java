package com.pyo.board_back.service;

import com.pyo.board_back.dto.request.user.PatchNicknameRequestDto;
import com.pyo.board_back.dto.request.user.PatchProfileImageRequestDto;
import com.pyo.board_back.dto.response.user.GetSignInUserResponseDto;
import com.pyo.board_back.dto.response.user.GetUserResponseDto;
import com.pyo.board_back.dto.response.user.PatchNicknameResponseDto;
import com.pyo.board_back.dto.response.user.PatchProfileImageResponseDto;

import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<? super GetUserResponseDto> getUser(String email);

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);

    ResponseEntity<? super PatchNicknameResponseDto> patchNickname(PatchNicknameRequestDto dto, String email);

    ResponseEntity<? super PatchProfileImageResponseDto> patchProfileImage(PatchProfileImageRequestDto dto,
            String email);

}

package com.pyo.board_back.service;

import org.springframework.http.ResponseEntity;

import com.pyo.board_back.dto.request.board.PostBoardRequestDto;
import com.pyo.board_back.dto.response.board.GetBoardResponseDto;
import com.pyo.board_back.dto.response.board.PostBoardResponseDto;

public interface BoardService {
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);

    ResponseEntity<PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}

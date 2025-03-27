package com.pyo.board_back.service;

import org.springframework.http.ResponseEntity;

import com.pyo.board_back.dto.request.board.PostBoardRequestDto;
import com.pyo.board_back.dto.request.board.PostCommentRequestDto;
import com.pyo.board_back.dto.response.board.GetBoardResponseDto;
import com.pyo.board_back.dto.response.board.GetCommentListResponseDto;
import com.pyo.board_back.dto.response.board.GetFavoriteListResponseDto;
import com.pyo.board_back.dto.response.board.PostBoardResponseDto;
import com.pyo.board_back.dto.response.board.PostCommentResponseDto;
import com.pyo.board_back.dto.response.board.PutFavoriteResponseDto;

public interface BoardService {
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);

    ResponseEntity<? super GetFavoriteListResponseDto> getFavoriteList(Integer boardNumber);

    ResponseEntity<? super GetCommentListResponseDto> getCommentList(Integer boardNumber);

    ResponseEntity<PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);

    ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, Integer boardNumber,
            String email);

    ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email);

}

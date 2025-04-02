package com.pyo.board_back.service;

import org.springframework.http.ResponseEntity;

import com.pyo.board_back.dto.request.board.PatchBoardRequestDto;
import com.pyo.board_back.dto.request.board.PostBoardRequestDto;
import com.pyo.board_back.dto.request.board.PostCommentRequestDto;
import com.pyo.board_back.dto.response.board.DeleteBoardResponseDto;
import com.pyo.board_back.dto.response.board.GetBoardResponseDto;
import com.pyo.board_back.dto.response.board.GetCommentListResponseDto;
import com.pyo.board_back.dto.response.board.GetFavoriteListResponseDto;
import com.pyo.board_back.dto.response.board.GetLatestBoardListResponseDto;
import com.pyo.board_back.dto.response.board.GetSearchBoardListResponseDto;
import com.pyo.board_back.dto.response.board.GetTop3BoardListResponseDto;
import com.pyo.board_back.dto.response.board.GetUserBoardListResponseDto;
import com.pyo.board_back.dto.response.board.IncreaseViewCountResponseDto;
import com.pyo.board_back.dto.response.board.PatchBoardResponseDto;
import com.pyo.board_back.dto.response.board.PostBoardResponseDto;
import com.pyo.board_back.dto.response.board.PostCommentResponseDto;
import com.pyo.board_back.dto.response.board.PutFavoriteResponseDto;

public interface BoardService {
        ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);

        ResponseEntity<? super GetFavoriteListResponseDto> getFavoriteList(Integer boardNumber);

        ResponseEntity<? super GetCommentListResponseDto> getCommentList(Integer boardNumber);

        ResponseEntity<? super GetLatestBoardListResponseDto> getLatestBoardList();

        ResponseEntity<? super GetTop3BoardListResponseDto> getTop3BoardList();

        ResponseEntity<? super GetSearchBoardListResponseDto> getSearchBoardList(String searchWord,
                        String preSearchWord);

        ResponseEntity<? super GetUserBoardListResponseDto> getUserBoardList(String email);

        ResponseEntity<PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);

        ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, Integer boardNumber,
                        String email);

        ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email);

        ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto dto, Integer boardNumber,
                        String email);

        ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(Integer boardNumber);

        ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email);

}

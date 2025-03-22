package com.pyo.board_back.dto.response.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.pyo.board_back.common.ResponseCode;
import com.pyo.board_back.common.ResponseMessage;
import com.pyo.board_back.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class PostBoardResponseDto extends ResponseDto {

    private PostBoardResponseDto() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<PostBoardResponseDto> success() {
        PostBoardResponseDto result = new PostBoardResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<PostBoardResponseDto> notExistUser() {
        PostBoardResponseDto result = new PostBoardResponseDto();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
    
    public static ResponseEntity<PostBoardResponseDto> postDatabaseError() {
        PostBoardResponseDto result = new PostBoardResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(result);
    }    
    
}

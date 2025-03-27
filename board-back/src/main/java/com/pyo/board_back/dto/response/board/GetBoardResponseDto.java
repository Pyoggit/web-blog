package com.pyo.board_back.dto.response.board;

import java.util.List;

import com.pyo.board_back.common.ResponseCode;
import com.pyo.board_back.common.ResponseMessage;
import com.pyo.board_back.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class GetBoardResponseDto extends ResponseDto {

    private int boardNumber;
    private String title;
    private String content;
    private List<String> boardImageList;
    private String writeDatetime;
    private String writerEmail;
    private String writerNickname;
    private String writerProfileImage;

    private GetBoardResponseDto() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

}

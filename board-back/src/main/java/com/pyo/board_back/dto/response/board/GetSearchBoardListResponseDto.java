package com.pyo.board_back.dto.response.board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.pyo.board_back.common.ResponseCode;
import com.pyo.board_back.common.ResponseMessage;
import com.pyo.board_back.dto.object.BoardListItem;
import com.pyo.board_back.dto.response.ResponseDto;
import com.pyo.board_back.entity.BoardListViewEntity;

import lombok.Getter;

@Getter
public class GetSearchBoardListResponseDto extends ResponseDto {
    private List<BoardListItem> searchList;

    private GetSearchBoardListResponseDto(List<BoardListViewEntity> boardListViewEntities) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.searchList = BoardListItem.getList(boardListViewEntities);
    }

    public static ResponseEntity<GetSearchBoardListResponseDto> success(
            List<BoardListViewEntity> boardListViewEntities) {
        GetSearchBoardListResponseDto result = new GetSearchBoardListResponseDto(boardListViewEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

}

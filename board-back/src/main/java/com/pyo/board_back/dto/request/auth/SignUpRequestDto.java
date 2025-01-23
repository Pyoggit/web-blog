package com.pyo.board_back.dto.request.auth;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SignUpRequestDto {

    @NotBlank
    @Email
    private String email; // 사용자 이메일

    @NotBlank
    @Size(min = 8, max = 20)
    private String password; // 비밀번호 (8~20자)

    @NotBlank
    private String nickname; // 사용자 닉네임

    @NotBlank
    @Pattern(regexp = "^[0-9\\-]{11,13}$")
    private String telNumber; // 전화번호 (하이픈 포함 가능)

    @NotBlank
    private String address; // 주소

    @NotBlank
    private String addressDetail; // 상세 주소

    @AssertTrue
    private Boolean agreedPersonal; // 개인정보 동의 여부
}

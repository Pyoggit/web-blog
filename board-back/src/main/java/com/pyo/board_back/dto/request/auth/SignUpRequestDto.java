package com.pyo.board_back.dto.request.auth;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Getter
// @Setter
@Data
@NoArgsConstructor
public class SignUpRequestDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, max = 20)
    private String password;

    @NotBlank
    private String nickname;
    @NotBlank
    @Pattern(regexp = "^[0-9]{11,13}$")
    private String telNumber;
    @NotBlank
    private String address;
    @NotBlank
    private String addressDetail;
    @NotBlank
    @AssertTrue
    private Boolean agreedPersonal;

}

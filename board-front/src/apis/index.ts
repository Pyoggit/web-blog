import axios, { AxiosError } from "axios";
import { SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInResponseDto , SignUpResponseDto} from "./response/auth";
import { ResponseDto } from "./response";

const DOMAIN = 'http://localhost:4001';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

// 동기함수 처리 async
export const signInRequest = async (requestBody: SignInRequestDto): Promise<SignInResponseDto | ResponseDto | null> => {
    try {
        const response = await axios.post(SIGN_IN_URL(), requestBody);
        const responseBody: SignInResponseDto = response.data; // 응답 데이터 타입 지정
        return responseBody;
    } catch (error) {
        if (axios.isAxiosError(error)) { // AxiosError 타입인지 확인
            if (error.response && error.response.data) {
                const responseBody: ResponseDto = error.response.data; // 올바르게 오류 데이터를 처리
                return responseBody;
            }
        }
        return null; // 에러가 AxiosError가 아닌 경우
    }
};

export const signUpRequest = async (requestBody: SignUpRequestDto) => {
    const result = await axios.post(SIGN_UP_URL(), requestBody)
        .then(response => {
            const responseBody: SignUpResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response?.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

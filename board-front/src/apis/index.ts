import axios, { AxiosError } from "axios";
import { SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInResponseDto , SignUpResponseDto} from "./response/auth";
import { ResponseDto } from "./response";
import { GetSignInUserResponseDto } from "./response/user";
import { PostBoardResponseDto } from "./response/board";
import { PostBoardRequestDto } from "./request/board";

const DOMAIN = 'http://localhost:4001';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const authorization = (accessToken: string) => {
    return { headers: { Authorization: `Bearer ${accessToken}`} } 
};
 
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

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;

export const getSignInUserRequest = async (accessToken: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(accessToken))
        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if(!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

const POST_BOARD_URL = () => `${API_DOMAIN}/board`;

export const PostBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string ) =>  {
    const result = await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken))
        .then(response => {
            const responseBody: PostBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error =>{
            if(!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

const FILE_DOMAIN = `${DOMAIN}/file`;

const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

const multipartFormData = { headers: { 'Content-Type' : 'multipart/form-data' } };

export const fileUploadRequest = async (data: FormData) => {
    const result = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
        .then(response => {
            const responseBody: string = response.data;
            return responseBody;
        })
        .catch(error =>{
            return null;
        })
    return result;
}
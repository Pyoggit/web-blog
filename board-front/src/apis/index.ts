import { SignInReqeustDto, SignUpRequestDto } from "./request/auth";

const DOMAIN = 'http://localhost:4001';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

export const signInRequest = (requestBody: SignInReqeustDto) => {
    // Sign in request logic here
};

export const signUpRequest = (requestBody: SignUpRequestDto) => {
    // Sign up request logic here
};

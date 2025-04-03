# TypeScript 기반 웹 프로젝트 – 게시판형 블로그 커뮤니티 플랫폼

> **이 프로젝트는 React + TypeScript와 Spring Boot + JPA를 활용하여 풀스택 구조를 심도 있게 이해하고,
JWT 기반 보안 인증/인가 흐름까지 직접 설계 및 구현해본 개인 실전 프로젝트입니다.
특히, 이전 팀 프로젝트에서 아쉬웠던 보안성과 코드 안정성을 보완하고, 프론트엔드 타입 안정성 향상을 목적으로 TypeScript를 도입하였습니다.**

---

## 📖 프로젝트 개요

### 🏷 프로젝트명
> Pyonity

### 🗓 개발 기간
> 2025.02.28 ~ 2025.03.31

### 🎯 프로젝트 목적
- 유저 간 자유롭게 소통하고 친목 도모가 가능한 게시판형 블로그 커뮤니티 플랫폼 개발
- JWT 인증 기반의 보안성 강화된 웹 서비스 구성
- 프론트엔드와 백엔드 간 명확한 API 설계와 통신 방식 정립

### 🚀 프로젝트 목표
- TypeScript 도입으로 프론트엔드 코드의 타입 안정성과 유지보수성 확보
- JWT 인증/인가 고도화를 통해 사용자 인증 절차를 명확히 분리하고 보안 강화
- Spring Boot + JPA + MySQL 기반으로 API 안정성과 확장성 확보

### 🛠 개발 환경
| 분야 | 기술 스택 |
|------|----------|
| **개발 OS** | Mac OS |
| **Front-End** | React, Vite, TypeScript, HTML5, CSS3, Axios |
| **Back-End** | Spring Boot, Java, JPA |
| **DB 서버** | MySQL 8.4.4 |
| **JDK 버전** | JDK 17.0.14 |
| **WAS** | Apache Tomcat 10.1.34 (Spring Boot 내장) |
| **형상관리** | GitHub |
| **개발Tool** | Visual Studio Code |
| **API** | Daum Postcode |

---

## 📌 주요 기능
1. **JWT 기반 인증 및 보안 강화**
   - Spring Security + JWT 인증 구조 구성
   - 프론트엔드에서 httpOnly 쿠키로 Access Token 저장 → JS 접근 차단
   - 커스텀 인증 실패 응답을 설정하여 사용자에게 명확한 피드백 제공
    <details>
    <summary>[관련 코드보기]</summary>
    <div markdown="1">
         
    ```ts
    if (session.getAttribute("userName") == null) {
      response.sendRedirect("login.jsp");
          return;
      }
    ```
    </div>
    </details>
     
2. **RESTful 기반 Axios API 통신 구조**
   - Spring Boot에서 RESTful 원칙을 기반으로 API URL 및 HTTP 메서드를 명확히 구분하여 설계
   - 클라이언트에서는 Axios를 모듈화하여 도메인, URL, 헤더 처리 등을 재사용 가능한 구조로 통합
   - TypeScript의 DTO 인터페이스를 활용하여 요청/응답의 타입 안정성 확보
   - 인증 실패, 서버 오류 등 에러 응답은 ResponseDto로 통일 처리하여 예외 상황에 일관된 대응 가능
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
       
    ```ts
    //인증 필요 여부에 따라 헤더에 Authorization 토큰 자동 포함
    const authorization = (token: string) => ({
      headers: { Authorization: `Bearer ${token}` }
    });

    axios.get("/api/v1/user", authorization(accessToken));

    //모든 요청 및 응답 객체에 대해 DTO 인터페이스 정의
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
    
    ```
    </div>
    </details>

3. **프로필 관리 기능**
   - 닉네임 및 프로필 이미지 변경 API
   - 이미지 업로드 시 multipart/form-data 처리
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
         
    ```ts
    const multipartFormData = { headers: { 'Content-Type' : 'multipart/form-data' } };

    export const fileUploadRequest = async (data: FormData) => {
      const response = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData);
      return response.data as string;
    }

    ```
    </div>
    </details>

4. **게시판 CRUD + 좋아요 + 조회수 기능**
   - 본인 게시글 수정, 삭제 가능 (AccessToken 기반 인증)
   - 게시글 상세 조회 시 자동 조회수 증가 API 호출
   - 좋아요 추가/삭제 → PUT 요청으로 처리
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
         
    ```ts
    if (session.getAttribute("userName") == null) {
      response.sendRedirect("login.jsp");
          return;
      }
    ```
    </div>
    </details>
    
5. **댓글 기능**
    - 댓글 작성 시 AccessToken 필수
    - 페이지 변경 시 댓글 목록 자동 업데이트
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
         
    ```ts
    if (session.getAttribute("userName") == null) {
      response.sendRedirect("login.jsp");
          return;
      }
    ```
    </div>
    </details>
  
6. **검색 기능**
    - 키워드 기반(제목+내용) 게시글 검색
    - 관련 키워드 추천 기능 (서버 연관 검색어 응답)
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
         
    ```ts
    if (session.getAttribute("userName") == null) {
      response.sendRedirect("login.jsp");
          return;
      }
    ```
    </div>
    </details>
    
7. **페이지네이션 기능**
   - usePagination<T>() 커스텀 훅을 활용하여 범용 페이징 처리 기능 구현
   - 한 페이지당 객체 5개 단위로 리스트 출력 (countPerPage 전달 가능)
   - 페이지 번호를 10개 단위 섹션으로 분리하여 구성 (currentSection, totalSection 상태 분리 관리)
    <details>
    <summary>[코드보기]</summary>
    <div markdown="1">
         
    ```ts
    if (session.getAttribute("userName") == null) {
      response.sendRedirect("login.jsp");
          return;
      }
    ```
    </div>
    </details>

---

## 📊 데이터 모델링
### 🔗 ERD  
<img src="https://github.com/user-attachments/assets/9c4048a0-30a0-4504-8461-f05b3f5d3538">

---

## 💻 실행 화면

### (준비중)

---

## 🔒 보안
- 🔹 JWT 기반 인증 / 인가 시스템
  -  Spring Security + JWT로 사용자 인증 처리
  -  토큰을 통한 사용자 인증 처리 (Stateless 설계)
- 🔹 Access Token 정책
  -  발급 시점 기준 1시간 유효하도록 설정
  -  만료된 토큰은 자동으로 인증 실패 처리
- 🔹 쿠키 기반 토큰 저장
  -  accessToken은 프론트엔드에서 httpOnly 쿠키에 저장되어 전송
  -  JS에서 직접 접근 불가 → XSS 방어
- 🔹 Spring Security 설정
  -  Stateless 설계로 Session 미사용
  -  모든 요청에 대해 JWT 필터에서 인증 여부 체크
  -  토큰 만료 및 오류 시 JSON 응답 반환 (401 Unauthorized)
- 🔹 CORS 정책 허용
  -  Authorization 헤더 노출 허용
  -  쿠키 사용을 위한 allowCredentials = true

---

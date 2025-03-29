# TypeScript 기반 풀스택 프로젝트 – 게시판형 블로그 커뮤니티 플랫폼

> **이 프로젝트는 React + TypeScript와 Spring Boot + JPA를 활용하여 풀스택 구조를 심도 있게 이해하고,
JWT 기반 보안 인증/인가 흐름까지 직접 설계 및 구현해본 개인 실전 프로젝트입니다.
특히, 이전 팀 프로젝트에서 아쉬웠던 보안성과 코드 안정성을 보완하고, 프론트엔드 타입 안정성 향상을 목적으로 TypeScript를 도입하였습니다.**

---

## 📖 프로젝트 개요

### 🏷 프로젝트명
> Pyonity

### 🗓 개발 기간
> 2025.02.28 ~ (진행중)

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
| **API** | Kakao login, Google login, Naver login, Daum Postcode |

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
  -  커스텀 인증 실패 응답을 설정하여 사용자에게 명확한 피드백 제공
- 🔹 CORS 정책 허용
  -  Authorization 헤더 노출 허용
  -  쿠키 사용을 위한 allowCredentials = true

---

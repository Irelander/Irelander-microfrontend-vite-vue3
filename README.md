# Microfrontend Vite + Vue3 + Pnpm

이 레포지토리는 Monorepo로 구성된 Microfrontend 샘플 코드입니다. 실제 운영 환경에서 사용하기 위해서는 추가적인 작업들이 필요하며 기본적인 Microfrontend의 동작의 이해를 돕기 위한 레포지토리 입니다.

## Package Manager

효율적인 모듈 관리와 Monorepo의 Workspace 관리를 위해 `pnpm`을 사용합니다. 

## Monorepo Structure

- apps ( Host Applicaions + Remotes Applications)
  - main-app ( Host Application [ Container ] )
  - micro-service
    - cart ( 장바구니 서비스 )
    - product ( 상품 서비스 )
    - user ( 유저 서비스 )
- packages
  - ui-components ( 프로젝트 공통 UI 컴포넌트 )
  - utils ( 프로젝트 공통 유틸 모듈 )

## 구동 방법

1. node_modules 설치

```bash
$pnpm install
```

2. 호스트 어플리케이션 실행 + 리모트 어플리케이션 구동

```bash
$pnpm dev:host
```

3. 호스트 어플리케이션 중지

```bash
$pnpm stop
```
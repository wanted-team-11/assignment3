# 원티드 프리온보딩 6차 3차 과제

## 💡 11팀

> 참여 인원 (이미지 클릭시 개인 레포지토리로 이동)

| [<img src="https://avatars.githubusercontent.com/u/16061038?v=4" width="120px" /> ](https://www.github.com/GUGIG) | [<img src="https://avatars.githubusercontent.com/u/62875596?v=4" width="120px" /> ](https://www.github.com/dlsxody1) | [<img src="https://avatars.githubusercontent.com/u/57490711?v=4" width="120px" /> ](https://www.github.com/gkdfo40) | [<img src="https://avatars.githubusercontent.com/u/97019802?v=4" width="120px" /> ](https://www.github.com/hjpark625) | [<img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="120px" /> ](https://www.github.com/ggsno) | [<img src="https://avatars.githubusercontent.com/u/111843724?v=4" width="120px" /> ](https://www.github.com/lee12779) | [<img src="https://avatars.githubusercontent.com/u/66675699?v=4" width="120px" /> ](https://www.github.com/happyeveryone96) | [<img src="https://avatars.githubusercontent.com/u/62886997?v=4" width="120px" />](https://www.github.com/HyunSeungBeom) |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **[팀장]정재훈**                                                                                                  | **김인태**                                                                                                           | **김항래**                                                                                                          | **박희주**                                                                                                            | **오강산**                                                                                                        | **이미란**                                                                                                            | **정진우**                                                                                                                  | **현승범**                                                                                                               |

---

> 역할

| 이름       | 역할                                   |
| ---------- | -------------------------------------- |
| **정재훈** | 영화 상세 페이지 구현, Header 구현     |
| **김인태** | 영화 상세 페이지 구현, Footer 구현     |
| **김항래** | 무한스크롤 구현, 각 리스트 페이지 구현 |
| **박희주** | 홈페이지 구현, 이미지 슬라이딩 구현    |
| **오강산** | 무한스크롤 구현, 각 리스트 페이지 구현 |
| **이미란** | 영화 상세 페이지 구현, Footer 구현     |
| **정진우** | 영화 상세 페이지 구현, Header 구현     |
| **현승범** | 홈페이지 구현, 영화 List UI/UX 구현    |

<br />
<br />

## 🌈 실행 방법

    $ git clone https://github.com/wanted-team-11/assignment3.git

    // 밑의 링크에서 API key 발급 후 .env파일 작성 (REACT_APP_API_KEY)
    // https://developers.themoviedb.org/3/getting-started/introduction

    $ cd assignment3
    $ npm install
    $ npm start

<br />
<br />

---

## ⭐ 배포 링크

<br />

> https://team-11-films.netlify.app/

<br />
<br />

---

## 📚 기술스택

<br />

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/typescript-4.8.2-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.5-DB7093?logo=styledcomponents)
![axios](https://img.shields.io/badge/axios-0.27.2-5E22D6)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.3.0-blue?logo=react-router)
![react-query](https://img.shields.io/badge/react--query-4.2.3-red?logo=react-query)

- 선정 이유

  - React
    - Virtual DOM을 활용하여 빠른 렌더링이 가능
    - 단방향 데이터 바인딩을 통한 디버깅이 용이
  - TypeScript
    - 정적 타입 지원하므로 컴파일 단계에서 오류를 사전에 포착할 수 있으며 이를 통해 미리 디버깅이 가능함
    - 여러가지 패러다임을 활용할 수 있음 (절차지향, 객체지향, 함수형)
  - Styled-Components
    - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동적으로 생성하기에 코드 경량화에 효과적
    - 스크립트에성의 상수와 함수를 쉽게 공유하여 props를 활용한 조건부 렌더링에 용이
    - 컴포넌트화 시켜 다른곳에서 사용 가능
    - 컴포넌트 기반 개발 방법에 적합하고 가장 많이 사용되는 CSS-in-JS 라이브러리
  - Axios
    - CSRF 보호 기능 내장
    - Request와 Reply를 JSON 형태로 자동 변경
      - fetchAPI와 차이점으로 fetchAPI는 요청 후 Promise로 JSON형태로 변환을 해야하지만 axios는 애초에 JSON으로 응답을 해줘서 간결한 코드 작성이 가능
  - React-Router-Dom
    - React의 SPA(Single Page Application)특성상 하나의 페이지(HTML)에서 모든 렌더링이 이루어짐
    - React의 이러한 강점을 활용하기 위해 페이지의 로딩없이 페이지에 필요한 컴포넌트를 렌더링 하기 위해 사용
  - React-Query
    - 서버 데이터 캐싱
    - 데이터 패칭 시 로딩를 한 곳에서 가능
    - 쉬운 상태 관리
      <br />

---

## 💬 캐싱에 대한 간단한 개념

<br />

- 캐싱은 시스템의 성능 및 확장성을 개선하는 데 목표를 두는 일반적인 기술입니다. 이를 위해 자주 액세스하는 데이터를 애플리케이션에 가까이 있는 빠른 스토리지에 일시적으로 복사해서 가까이 위치하는 경우의 스토리지를 이용하는 것입니다.
- 캐싱은 성능, 확장성 및 가용성을 크게 향상할 수 있습니다. 보유한 데이터가 많을수록 그리고 이 데이터에 액세스해야 하는 사용자 수가 많을수록 캐싱의 이점은 더 커집니다.
- 적절한 캐싱을 통합하면 마이크로 서비스, API 및 데이터 리포지토리에 대한 반복적인 호출을 제거하여 대기 시간을 줄일 수도 있습니다

<br />

---

## 🕹️ React-Query에서의 상태 관리 흐름

<br />

- fetching
  - 데이터 요청 중
- fresh
  - 데이터를 갓 받아온 직후 / 컴포넌트의 상태가 변하더라도 데이터 재요청 하지 않음
- stale
  - fresh한 데이가 일정한 시간이 지나면 데이터 만료
  - 최신화가 필요한 데이터 여기까진 active 하다고 함!
- inactive
  - 쿼리가 언마운트 된 상태 (더는 사용하지 않는 상태)
  - 주의 !
    - 아직 캐시에서 완전히 삭제 된 상태가 아님
    - 쿼리가 언마운트된다고 해서 비동기 요청이 취소되는 것은 아님
    - promise가 일단 만들어지고 언마운트 된거라면 데이터는 캐시에 살아 있을 수 있음
- delete

  - 완전히 삭제된 상태(캐시 데이터가 메모리에서 삭제!)

  <br />

---

## 📁 폴더 구조

    root
    |-- tsconfig.json
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- .gitignore
    |-- .husky
    |-- public
    |   |-- index.html
    |-- src
        |-- compoenents
        |-- page
        |-- services
        |-- styles
        |-- App.tsx
        |-- index.tsx

---

## 📝 구현 기능

- 공통 사항



  - Loading 상태 표기
    - 초기에 useQuery에서 받아오는 응답 중 isLoading을 활용해 Loading 상태를 구현하려 했으나 isSuccess를 활용해 데이터를 받아 렌더링하는 부분과 경합되어 Loading 상태 구현에 어려움 직면
    - isLoading이라는 state를 선언해서 img태그에 onLoad속성을 활용해 setIsLoading으로 state를 변화시켜 Loading상태 구현 성공
  - Infinite scroll
    - react-query의 useInifiteQuery와 react-intersection-observer를 활용하여 구현
  - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
    - scroll position이 0이 아닐 때, 즉 스크롤이 밑으로 내려갔을 때 버튼 노출

  <br />

- movies / 리스트 페이지


https://user-images.githubusercontent.com/46833758/188915871-2417eee1-f99a-4fc3-a901-9e5f9c2ca606.mp4


  - 한번에 가져올 데이터 최대 20
    - axios로 인스턴스를 생성해서 각 페이지에 맞는 API를 요청해 데이터들을 받아오는 함수작성 후 HomepageContainer에서 useQuery를 활용하여 데이터 관리
  - 제목, 포스터, 별점 표시
    - 받아온 데이터를 map을 사용해서 컴포넌트화 시키고 포스터사진, 제목, 평점(별점)을 표시
  - 포스터 없는 경우, 대체 이미지 사용
    - 포스터가 없는 데이터에 대해 대체 이미지(public/noImage.jpg)를 사용해 대체이미지 구현

  <br />

- movie / 상세 페이지




https://user-images.githubusercontent.com/46833758/188916819-efdf194d-2e57-44a1-adca-9ff742ca32a2.mp4




  - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
    - 각 영화의 트레일러 영상(유튜브)이 있을 경우 유튜브에서 임베드코드를 받은 곳에 autoplay속성을 추가해서 상세 페이지 진입 시 영상이 자동재생되도록 구현
  - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
    - 받아온 데이터를 map메서드로 제목, 포스터(없을때는 noImage.jpg), 평점(별점), 연도, 장르 표시 완료

  <br />

- search


https://user-images.githubusercontent.com/46833758/188915889-0083a595-db37-4013-9b88-5e90439c87ca.mp4


  - 제목, 포스터, 별점
    - 받아온 데이터를 map을 사용해서 포스터, 제목, 별점 표시
  - 포스터 없는 경우, 대체 이미지 사용
    - 포스터가 없는 데이터에 대해 대체 이미지(public/noImage.jpg)를 사용해 대체이미지 구현

  <br />

  ***

  ## 🙏 Commit Convention

  |   Type   | Description                   |
  | :------: | ----------------------------- |
  |   feat   | Add a new feature             |
  |   fix    | Fix the bug                   |
  |  design  | UI design changes such as CSS |
  |  style   | code formatting               |
  | refactor | Refactoring the code          |
  |   docs   | Modify the document           |
  |  chore   | etc.                          |

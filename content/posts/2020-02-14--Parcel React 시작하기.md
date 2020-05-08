---
title: "Parcel React 시작하기"
date: "2016-02-02T22:40:32.169Z"
template: "post"
draft: false
slug: "Parcel-React-시작하기"
category: "react"
tags:
  - "pacel"
  - "react"
  - "typescript"
  - "storybook"
description: "Parcel로 React기본 프로젝트를 시작 해 본다."
socialImage: "/media/image-0.jpg"
---

# Parcel이란?

Parcel은 기존 Webpack의 복잡성을 줄이로 빠르게 번들리을 생성하게 도와주는
번들링 도구이다.

기존 react-create-app로 프로젝트를 생성 해도 되지만, 개인이 커스터마이징 하기 위해
webpack을 수정하기에는 다소 불편한 점이 있다.

parcel은 새롭게 프로젝트를 생성시에 typescript와 babel 등을 정말 간단하게 적용 시킬 수 있다.


## 프로젝트 생성하기

프로젝트 진행하기에 앞서 프로젝트 패키지 매니저는 **Yarn**을 사용합니다.
([yarn 기본 사용법](https://yarnpkg.com/getting-started/usage))


### 프로젝트 생성하기

#### 기본 구조 작성(shell)
``` shell
mkdir parcel-react
cd parcel-react
yarn init
mkdir src
mkdir public
touch public/index.html
touch src/index.tsx
touch src/App.tsx
touch tsconfig.json
```
#### 기본 구조 작성(powershell)
``` powershell
mkdir parcel-react
cd parcel-react
yarn init
mkdir src
mkdir public
New-Item public/index.html
New-Item src/index.tsx
New-Item src/App.tsx
New-Item tsconfig.json
```

위와 같이 작성하게 되면 기본적인 구조가 만들어집니다.

* parcel-react
  * src
    + App.tsx
    + index.tsx
  * public
    + index.html
  + package.json
  + tsconfig.json

### 프로젝트에 필요한 패키지 설치
> 위치
* **parcel-react**
  * src
    + App.tsx
    + index.tsx
  * public
    + index.html
  + package.json
  + tsconfig.json

``` shell
# React에 필요한 기본적인 패키지
yarn add -s react react-dom react-router react-router-dom

# parcel 패키지
yarn add -D parcel parcel-bundler

# typescript 패키지
yarn add -D typescript @types/react @types/react-router
```









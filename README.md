# taling-ui
Taling UI System

## 개요 

Taling UI System은 탈잉 서비스의 UI를 구성하는 컴포넌트들을 모아놓은 라이브러리입니다.

### Requirements

1. React(next.js)

2. tailwindcss

## 적용 방법

### 1. git submodule 

적용할 프로젝트에 서브모듈을 추가합니다.

```
git submodule add https://github.com/taling/taling-ui.git
```

프로젝트의 루트 디렉터리에 taling-ui 폴더가 생성되고 main 브랜치를 바라보게 됩니다.

### 2. tsconfig

`tsconfig`의 `paths`항목에 아래와 같이 추가합니다.

```
"paths": {
  ...,
  "@taling-ui/*": [
  "./taling-ui/src/components/*"
  ]
}
```

### 3. tailwindcss 

`tailwind.config.js` 파일의 `contents` 항목에 아래와 같이 추가합니다.

```
content: [
  ...,
  "./taling-ui/src/**/*.{js,ts,jsx,tsx}"
],
```
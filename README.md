# K-MOOC 웹사이트 - Vanilla HTML/CSS/JS

Figma 디자인을 기반으로 만들어진 K-MOOC(한국형 온라인 공개강좌) 웹사이트의 반응형 구현입니다.

## 프로젝트 구조

```
├── index.html       # HTML 구조
├── styles.css       # CSS 스타일
├── script.js        # JavaScript 기능
└── README.md        # 이 파일
```

## 기능 특징

### 1. 반응형 디자인
- **Flexbox & Grid**: 유연한 레이아웃 시스템
- **모바일 최적화**: 768px 이하 해상도 지원
- **태블릿 지원**: 1024px 이하 해상도 개선

### 2. 주요 섹션
- **헤더**: 네비게이션, 로그인/회원가입, 언어 선택
- **배너**: 주요 컨텐츠 배너
- **추천 강좌**: 4열 그리드 레이아웃
- **인기 강좌**: 3열 카드 레이아웃
- **마이크로러닝**: 해시태그 기반 필터링
- **숏폼 영상**: 16:9 비율 비디오 컨테이너
- **공지사항**: 목록형 레이아웃
- **푸터**: 링크 및 소셜 미디어

### 3. 상호작용 기능
- **맨 위로 버튼**: 300px 이상 스크롤 시 표시
- **캐러셀 네비게이션**: 이전/다음 버튼
- **스무드 스크롤**: 앵커 링크 동작
- **탭 버튼 활성화**: 상태 관리
- **모바일 메뉴**: 반응형 네비게이션

## 이미지 리소스

모든 이미지는 `placehold.co`를 사용합니다.

| 용도 | 비율 | URL 예시 |
|------|------|---------|
| 배너 | 1920x400 | `https://placehold.co/1920x400/0036ce/ffffff?text=Banner` |
| 강좌카드 | 257x160 | `https://placehold.co/257x160/cccccc/666666?text=Course` |
| 썸네일 | 130x80 | `https://placehold.co/130x80/cccccc/666666?text=Thumb` |
| 마이크로 | 256x160 | `https://placehold.co/256x160/cccccc/666666?text=Micro` |
| 파트너로고 | 108x124 | `https://placehold.co/108x124/e0e0e0/999999?text=Partner` |

## CSS 클래스 네이밍

모든 클래스명은 **소문자**로 시작합니다:
- `.header` - 헤더 컨테이너
- `.course-card` - 강좌 카드
- `.banner-section` - 배너 섹션
- `.scroll-top` - 맨 위로 버튼

## 반응형 브레이크포인트

```css
- 1920px 이상: 풀 레이아웃
- 1200px - 1399px: 3열 그리드
- 1024px - 1199px: 2열 그리드
- 768px - 1023px: 1~2열 그리드
- 480px - 767px: 1열 그리드
- 480px 이하: 모바일 최적화
```

## 주요 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, CSS Grid, 반응형 디자인
- **Vanilla JavaScript**: 외부 라이브러리 없음
- **placehold.co**: 더미 이미지

## 기능 구현 항목

### JavaScript
- ✅ 스크롤 이벤트 (맨 위로 버튼)
- ✅ 캐러셀 네비게이션
- ✅ 탭 토글
- ✅ 이미지 지연 로드 (IntersectionObserver)
- ✅ 모바일 메뉴 관리
- ✅ 키보드 네비게이션
- ✅ 폼 유효성 검사

### CSS
- ✅ Flexbox 레이아웃
- ✅ CSS Grid 레이아웃
- ✅ 미디어 쿼리 (반응형)
- ✅ 호버 효과
- ✅ 전환 애니메이션
- ✅ 박스 섀도우 효과

## 브라우저 호환성

| 브라우저 | 버전 | 지원 |
|---------|------|------|
| Chrome | 최신 | ✅ |
| Firefox | 최신 | ✅ |
| Safari | 최신 | ✅ |
| Edge | 최신 | ✅ |
| IE 11 | - | ❌ |

## 성능 최적화

- **지연 로드**: IntersectionObserver를 사용한 이미지 로드
- **스무드 스크롤**: CSS `scroll-behavior: smooth`
- **이벤트 위임**: 동적 이벤트 핸들링
- **CSS 최적화**: 주요 기능별로 조직화된 스타일

## 접근성 기능

- ✅ 본문 바로가기 링크
- ✅ 시맨틱 HTML 구조
- ✅ 이미지 Alt 텍스트
- ✅ ARIA 레이블 (필요시)
- ✅ 키보드 네비게이션 지원

## 커스터마이징

### 색상 변경
`styles.css`에서 주요 색상:
```css
--primary-color: #0036ce;  /* 파란색 */
--text-color: #333;         /* 검정색 */
--background-color: #f5f5f5; /* 밝은 회색 */
```

### 폰트 변경
HTML의 `<link>` 태그에서 Google Fonts 변경:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
```

## 개발 팁

1. **로컬 개발**: 간단한 HTTP 서버 실행
   ```bash
   python -m http.server 8000
   # 또는
   python3 -m http.server 8000
   ```

2. **개발자 도구**: F12 키로 개발자 도구 열기
   - 반응형 디자인 모드: Ctrl+Shift+M (또는 Cmd+Shift+M)

3. **이미지 실제 교체**:
   - placehold.co URLs를 실제 이미지 경로로 교체
   - 예: `/images/banner.jpg`

## 라이선스

이 프로젝트는 교육 목적으로 생성되었습니다.

## 문의

추가적인 기능이나 개선 사항은 main 브랜치에 이슈로 등록해주세요.

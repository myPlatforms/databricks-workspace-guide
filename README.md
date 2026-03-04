# Databricks Workspace 구성 가이드

AWS/Azure 환경에서 Databricks 워크스페이스를 구성하는 단계별 가이드 프레젠테이션입니다.

## 구성

| CSP | 일반 | Backend Private Link | Frontend Private Link |
|-----|------|---------------------|----------------------|
| **AWS** | VPC, IAM, S3, Workspace | VPC Endpoint (REST API + SCC) | Transit VPC, Frontend Endpoint, DNS |
| **Azure** | VNet, NSG, ADLS, Workspace | Private Endpoint (ui_api + browser_auth) | Transit VNet, Frontend PE, DNS |

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

개발 서버 실행 후 `http://localhost:8000` 접속

## 네비게이션

- **화살표 키**: 슬라이드 이동 (좌우: 섹션, 상하: 섹션 내 슬라이드)
- **Space**: 다음 슬라이드
- **ESC**: 전체 슬라이드 개요
- **S**: 발표자 노트 (Speaker view)
- **F**: 전체 화면

## 프로젝트 구조

```
├── index.html              # 메인 프레젠테이션
├── assets/
│   ├── images/
│   │   ├── aws/            # AWS 스크린샷/다이어그램
│   │   └── azure/          # Azure 스크린샷/다이어그램
│   ├── diagrams/           # Mermaid 다이어그램 소스 (.mmd)
│   └── css/
│       └── custom.css      # 커스텀 스타일
└── screenshots/
    └── SCREENSHOT_GUIDE.md # 스크린샷 촬영 가이드
```

## 스크린샷 추가

`screenshots/SCREENSHOT_GUIDE.md`에서 필요한 스크린샷 목록과 촬영 가이드를 확인하세요.

파일 네이밍: `{csp}-{section}-{step}-{description}.png`

예: `aws-general-04-vpc-create.png` → `assets/images/aws/`에 저장

## 참고 자료

- [AWS Databricks System Architecture](https://docs.google.com/presentation/d/1zYKBRhPQS2KywJxcvZ7bbXkQ1kq-G9D3XdLXePbE6uQ)
- [AWS Private Link Workspace Setup Playbook](https://docs.google.com/document/d/1tMGhnlgn3xlInZO2UV9lKVjyfxrSZlnAS8nnNnE6ryI)
- [Databricks on AWS - GitBook](https://yubin-cho.gitbook.io/databricks)

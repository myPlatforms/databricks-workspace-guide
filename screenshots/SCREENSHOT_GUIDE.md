# 스크린샷 촬영 가이드

프레젠테이션에 필요한 스크린샷 목록과 촬영 가이드입니다.

## 네이밍 컨벤션

```
{csp}-{section}-{step}-{description}.png
```

- **csp**: `aws` | `azure`
- **section**: `general` | `backend-pl` | `frontend-pl`
- **step**: 2자리 숫자 (01, 02, ...)
- **description**: 영문 소문자, 하이픈 구분

예시: `aws-general-04-vpc-create.png`

## 권장 사항

- **해상도**: 1920x1080 이상
- **포맷**: PNG (투명 배경 불필요)
- **크기**: 가능하면 1MB 이하로 최적화
- **브라우저**: 불필요한 탭/북마크바 제거 후 촬영
- **민감 정보**: Account ID, Region 등은 유지하되 실제 키/시크릿은 마스킹

## 저장 위치

- AWS: `assets/images/aws/`
- Azure: `assets/images/azure/`

---

## AWS 일반 워크스페이스 (`assets/images/aws/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `aws-general-01-create-metastore.png` | Account Console → Catalog → Create metastore | Metastore 생성 폼 |
| `aws-general-02-vpc-create.png` | AWS Console → VPC → Create VPC (VPC and More) | VPC 생성 화면, 서브넷/AZ 설정 포함 |
| `aws-general-03-vpc-created.png` | AWS Console → VPC → Your VPCs | 생성된 VPC 목록/상세 |
| `aws-general-04-security-group.png` | AWS Console → VPC → Security Groups → Edit rules | SG 인바운드/아웃바운드 규칙 화면 |
| `aws-general-05-storage-setup.png` | AWS Console → S3 + IAM → Roles | S3 버킷 생성 + IAM Role 설정 화면 |
| `aws-general-06-create-workspace.png` | Account Console → Workspaces → Create workspace | 워크스페이스 생성 위저드 (Cloud Resources 단계) |
| `aws-general-07-workspace-login.png` | 워크스페이스 URL 접속 | 로그인 후 메인 화면 |

## AWS Backend Private Link (`assets/images/aws/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `aws-backend-pl-01-endpoint-subnet.png` | AWS Console → VPC → Subnets → Create | Endpoints용 서브넷 생성 |
| `aws-backend-pl-02-endpoint-sg.png` | AWS Console → VPC → Security Groups | Backend endpoints SG 규칙 |
| `aws-backend-pl-03-rest-api-endpoint.png` | AWS Console → VPC → Endpoints → Create | REST API VPC Endpoint 생성 (서비스명 입력 화면) |
| `aws-backend-pl-04-scc-endpoint.png` | AWS Console → VPC → Endpoints → Create | SCC Relay VPC Endpoint 생성 |
| `aws-backend-pl-05-sts-kinesis.png` | AWS Console → VPC → Endpoints | Option 2: STS/Kinesis endpoints |
| `aws-backend-pl-06-register-endpoint.png` | Account Console → Cloud Resources → VPC Endpoints | Databricks에 VPC Endpoint 등록 화면 |
| `aws-backend-pl-07-network-config.png` | Account Console → Cloud Resources → Networks | Network Configuration 생성 화면 |

## AWS Frontend Private Link (`assets/images/aws/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `aws-frontend-pl-01-frontend-endpoint.png` | AWS Console → VPC → Endpoints (Transit VPC) | Frontend VPC Endpoint 생성 |
| `aws-frontend-pl-02-register-endpoint.png` | Account Console → Security → VPC Endpoints | Frontend Endpoint 등록 |
| `aws-frontend-pl-03-private-access.png` | Account Console → Security → Private access settings | Private Access Settings 생성 |
| `aws-frontend-pl-04-dns-config.png` | AWS Console → Route53 → Private Hosted Zones | DNS 설정 화면 |
| `aws-frontend-pl-05-nslookup.png` | Terminal | nslookup 결과 (Private IP 확인) |

## Azure 일반 워크스페이스 (`assets/images/azure/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `azure-general-01-access-connector.png` | Azure Portal → Access Connector for Databricks | Access Connector 생성 화면 |
| `azure-general-02-vnet-create.png` | Azure Portal → Virtual Networks → Create | VNet + 서브넷 + Delegation 설정 |
| `azure-general-03-nsg-rules.png` | Azure Portal → NSG → Inbound/Outbound rules | NSG 규칙 설정 화면 |
| `azure-general-04-deploy-workspace.png` | Azure Portal → Azure Databricks → Create | 워크스페이스 배포 위저드 (Networking 탭) |
| `azure-general-05-workspace-login.png` | 워크스페이스 URL 접속 | Azure AD 로그인 후 메인 화면 |

## Azure Backend Private Link (`assets/images/azure/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `azure-backend-pl-01-pe-create.png` | Azure Portal → Private Link Center → Create PE | Private Endpoint 생성 (databricks_ui_api) |
| `azure-backend-pl-02-dns-zone.png` | Azure Portal → Private DNS Zones | DNS Zone + VNet link 설정 |
| `azure-backend-pl-03-pe-status.png` | Azure Portal → Databricks → Networking → PE connections | PE 상태 확인 (Approved) |

## Azure Frontend Private Link (`assets/images/azure/`)

| 파일명 | 촬영 위치 | 설명 |
|--------|-----------|------|
| `azure-frontend-pl-01-transit-vnet.png` | Azure Portal → Virtual Networks | Transit/Hub VNet 설정 |
| `azure-frontend-pl-02-frontend-pe.png` | Azure Portal → Private Link Center → Create PE | Frontend Private Endpoint 생성 |
| `azure-frontend-pl-03-dns-link.png` | Azure Portal → Private DNS Zones → VNet links | Transit VNet에 DNS Zone 연결 |
| `azure-frontend-pl-04-public-access.png` | Azure Portal → Databricks → Networking | 공용 접근 비활성화 설정 |
| `azure-frontend-pl-05-nslookup.png` | Terminal | nslookup 결과 (Private IP 확인) |

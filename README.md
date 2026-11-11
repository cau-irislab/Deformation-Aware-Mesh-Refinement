# Deformation-Aware Mesh Refinement — Project Page

**This repository contains the project website, not the mesh-refinement implementation.**

- Code: https://github.com/Budy123/Deformation-Aware-Mesh-Refinement
- Reference layout: https://github.com/cau-irislab/Deformable-3D-ADV

## 처음 업로드하는 방법

1. 제공된 ZIP의 압축을 풉니다. ZIP 파일 자체를 GitHub에 올리지 않습니다.
2. `cau-irislab/Deformation-Aware-Mesh-Refinement` 저장소를 엽니다.
3. **Add file → Upload files**를 선택합니다.
4. 압축을 푼 폴더 **안에 있는** `index.html`, `static/`, `README.md`, `NOTICE.md`를
   모두 끌어다 놓습니다. 감싸는 상위 폴더까지 올리지 않습니다.
5. 기존 README는 이 파일로 교체하고, **Commit changes**로 저장합니다.
6. `cau-irislab` 계정에서 **Settings → Pages**를 엽니다.
7. **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**로 설정하고
   **Save**를 누릅니다. 이전에 Source를 GitHub Actions로 설정했다면 변경합니다.
8. **Actions**에서 자동 Pages 배포가 성공했는지 확인하고,
   **Settings → Pages → Visit site**로 실제 페이지를 엽니다.

GitHub Pages가 공개 작업을 처리하므로 별도 Jekyll 설치나 직접 작성한 Actions
워크플로는 필요하지 않습니다. 기존 GitHub Actions 워크플로가 이미 들어 있는 저장소라면
자동 배포가 중복되지 않도록 먼저 해당 파일과 설정을 확인합니다.

업로드 후 저장소 첫 화면에 아래 구조가 바로 보여야 합니다.

```text
index.html
static/
README.md
NOTICE.md
```

GitHub 저장소 주소와 실제 웹사이트 주소는 다릅니다. 연구실의 기존 페이지들은
`irislab.cau.ac.kr` 도메인을 사용하므로 **Visit site에 표시된 주소**를 기준으로 확인합니다.
Custom domain 항목에 다른 프로젝트의 주소를 복사하거나 별도 CNAME 파일을 만들지 않습니다.

## Paper / Code 버튼

- **Paper**: 버튼은 표시되지만 실제 `disabled` 버튼이므로 클릭·키보드로 이동하지 않습니다.
  임시 링크나 가짜 PDF는 없습니다.
- **Code**: 별도 Budy123 구현 저장소로 연결됩니다. 구현 코드를 여기에 복사할 필요가 없습니다.

논문 공개 후에는 `index.html`의 `paper-button` 버튼을 실제 논문 URL을 가진 링크로
교체하면 됩니다. 그전에는 비활성 상태를 유지합니다.

## 파일 구성과 로컬 확인

- `index.html`: 제목, 저자, 설명, 그림·영상 배치, 링크와 BibTeX.
- `static/css/`: 기존 연구실 페이지와 같은 Bulma 및 프로젝트 스타일.
- `static/js/index.js`: 무음 자동 재생과 OS 동작 줄이기 설정 대응.
- `static/images/`: 논문 그림, 영상 첫 프레임, favicon.
- `static/videos/comparison.mp4`: 기존 원본/refined mesh 비교 영상.
- `static/videos/comparison.webm`: 같은 영상의 브라우저 호환용 형식.
  브라우저가 지원하는 형식을 자동으로 재생합니다.
- `static/fonts/`: 로컬 글꼴과 해당 라이선스.
- `static/licenses/`: Bulma 라이선스.

그림·영상·글꼴이 모두 들어 있어 별도 다운로드나 빌드가 필요하지 않습니다.
압축 해제 후 `index.html`을 브라우저로 열어도 기본 화면을 확인할 수 있습니다.
모든 외부 링크의 동작과 실제 배포 결과는 공개 후 확인합니다.

## 출처와 권리

Academic Project Page Template / Nerfies 출처 표기를 페이지 하단에 유지했습니다.
페이지 템플릿은 CC BY-SA 4.0, Bulma는 MIT, 글꼴은 SIL OFL입니다.
논문 그림과 Fish1 예제 영상의 별도 권리는 [NOTICE.md](NOTICE.md)를 참고하세요.
구현 저장소의 MIT 라이선스가 이 페이지의 모든 자료에 적용되는 것은 아닙니다.

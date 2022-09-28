# jju_squid_game <br/>
three.js 라이브러리를 활용하여 넷플릭스 드라마 오징어 게임에 나오는 사다리게임을 만들어보았습니다.<br/>
캐릭터는 개인적으로 좋아하는 주호민 작가님의 캐릭터 디자인을 적용하여 플레이어를 만들었습니다.<br/>
<br/>
🛠stacks<br/>
- Javascript<br/>
- three.js : webGL라이브러리<br/>
- cannon.js : 물리엔진 라이브러리<br/>
- gsap : 애니메이션 효과<br/>
<br/>
🚀start<br/>
1. 패키지 설치<br/>
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.<br/>
----------
<br/>
npm i -D @babel/cli @babel/core @babel/preset-env babel-loader clean-webpack-plugin copy-webpack-plugin core-js cross-env html-webpack-plugin source-map-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server
<br/>
----------
<br/>
npm i three
<br/>
----------
<br/>
npm i cannon-es
<br/>
----------
<br/>
npm i gsap
<br/>
<br/>
2. 개발용 서버 구동<br/>
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.<br/>
----------
<br/>
npm start
<br/>
----------
<br/><br/>
3. 빌드(배포용 파일 생성)<br/>
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.<br/>
----------
<br/>
npm run build
<br/>
----------
<br/>
<br/>
(!)<br/>
npm start 또는 npm run build 실행 시 에러가 난다면 Node.js를 LTS 버전(장기 지원 버전)으로 설치 후 다시 시도해 보세요.<br/>
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르면 설치할 수 있어요.<br/>
----------
<br/>
n lts
<br/>
----------<br/>
<br/>
(!)<br/>
ERROR in unable to locate '경로...'<br/>
위와 같은 에러가 발생한다면, webpack.config.js의 CopyWebpackPlugin에 설정된 파일이 있는지 확인해주세요.<br/>
CSS나 이미지 폴더 등이 필요하지 않다면 webpack.config.js에서 CopyWebpackPlugin 부분 전체를 주석 처리 해주세요.<br/>

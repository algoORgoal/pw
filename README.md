# pw
글을 쓰기 시작하는 작가들의 warm-up을 위해 랜덤한 글귀를 제공하는 서비스입니다.
페이지는 현재 네가지로 구성, 추가 예정(login.html, index.html, write.html, read.html)
업무 분담:
별찬-login.html, write.html
민규-index.html, read.html

추가 사항
1. 사용자 회원가입시 개인정보 저장 => 데이터베이스 사용법 필요
2. 로그인 시에 아이디, 비밀번호 일치 확인 => javascript 필요
3. write.html에서 글을 저장하면 read.html의 리스트에 해당 글의 제목이 추가되고, 클릭했을 때 내용을 읽어볼 수 있는 페이지가 나와야한다.
4. 쿠키를 사용하여 방문 기록을 저장, 다음에 로그인할 때 인풋 element를 클릭할 경우 이전 로그인 id를 선택할 수 있게 변경
5. index.html에서 username에 해당하는 부분에 사용자 이름 넣기
6. 웹 상에서 무작위로 페이지를 선정하고 무작위로 페이지 안의 연속된 텍스트 10줄-최대 300글자(글자 수는 추후 변경 가능)을 가져오는 기능 추가

목표를 위해 필요한 skillset
1. javascript
2. node and express
3. api
4. database
5. network and protocol(optional)
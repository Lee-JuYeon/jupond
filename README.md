# Dokdo_Mail

## 판별
- 유니코드 (Identical Unicode Characters)   
    - 'apple.com'일 경우, 'a'가 알파벳 a가 아닌 유니코드상 다른 a일 수 있다.
    - unicode coverter로 도메인의 string값을 가져와서 서로 비교해보는데, 같은 알파벳이면 같은 유니코드가 뜰것이다.

- DKIM, DMARC
    - value가 FAIL일 경우, 보낸 도메인과 실제 도메인이 일치하지 않은 경우. 즉, 조작된 도메인이다.


## 기능
- 문서 첨부파일은 구글 클라우드에서 미리보기 권장
- 도메인 fail일 경우 의심 (spendgrid같은 메일 대신 보내주는 플랫폼도 의심한다고 미리 공지)


## 호환
- Gmail
- Naver mail

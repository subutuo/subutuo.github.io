---
layout: post
title: "cors 관련"
tags: [cors]
comments: true
---

# Same-origin, Cross-origin
여기서 origin(출처)란 **프로토콜, 포트, 호스트**를 합친 것을 말한다.  
따라서 Same-origin은 같은 출처를 뜻하고, Cross-origin은 다른 출처를 뜻한다.

<br>

## Same-origin Policy(동일 출처 정책)
초기 웹사이트 보안 방식으로, 출처가 다른 리소스와 통신하는 것을 제한한다.    
하지만 점차 웹 프로젝트가 거대해지면서 외부 API가 필요한 경우가 잦아졌는데,    
XMLHttpRequest는 Same-origin 정책을 따르기에, XMLHttpRequest을 사용하는 웹 애플리케이션은 자신과 동일한 도메인으로만 HTTP 요청을 보내는 것이 가능했고 외부 API를 호출하려면 편법을 써야 했다.  
이를 개선시키기 위해 개발자들은 브라우저 벤더사들에게 XMLHttpRequest가 cross-domain 요청을 할 수 있도록 요청했고, 여기서 개선방안으로 나온 것이 바로 CORS이다.  
`일부는 제약없이 cross-origin 접근이 가능하다.(script src="...", link href="...", img, video, frame 등등)`

<br>

## CORS(Cross-Origin Resource Sharing)
서버에서 응답헤더로 Access-Control-Allow-Origin헤더에 크로스도메인을 허용할 출처를 적어놓으면 외부 요청을 허용할 수 있다.  

<br>

### CORS 적용 방법 : 클라이언트
클라이언트는 기존 	Jquery의 Ajax 요청과 동일하게 구현하면 된다.  
[CORS적용 조건](https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS#%EA%B0%84%EB%8B%A8%ED%95%9C_%EC%9A%94%EC%B2%AD)
여기서 조건을 만족하지 않을 경우에는 method를 OPTION으로 preflight를 보내 접근 가능한지 사전 전달하며 허용될 경우 요청을 다시 보낸다.  
Jquery 같은 경우 요청 출처가 다른 다른 경우면 preflight 후 서버에서 확인 후, actual 요청을 자동으로 처리하므로 신경쓰지 않아도 된다.  

<br>

### CORS 적용 방법 : 서버

헤더 | 내용
:---:|---
Access-Control-Allow-Origin| \<origin> \| * (요청을 보내는 페이지의 출처(도메인)을 지정할 수 있다.)
 Access-Control-Allow-Methods | GET, POST, PUT, DELETE, OPTIONS (미설정 시 GET, POST만 가능)
 Access-Control-Max-Age | 3600 (해당 시간동안은 Prelight 요청을 다시 하지 않는다.)
 Access-Control-Allow-Headers | Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization

<br>

## 편법 

### JSONP 방식으로 호출하기 
css나 js같은 resource 파일들은 도메인이 달라도 정책에 영향을 받지 않고 로딩이 가능한 점을 이용한 방식으로 외부에서 읽어온 js 파일들을 json 으로 바꿔주는 방식이다. (GET방식만 가능하다.)
https://kingbbode.tistory.com/26

<br>

### 크롬 확장어플 설치
Moesif CORS같은 어플을 다운 받으면, 응답헤더를 변경해 데이터를 볼 수 있게함.




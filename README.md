#javascript

프로그래밍 언어 유형
- 절차를 순서대로 작성해 나가는 절차적 언어
- *중요 데이터와 절차를 묶어 객체 단위로 관리 객체 지향 언어 (!!!)
- *중요 프로그램 함수를 조합하여 구현해 나가는 함수형 언어 (!!!)
- 데이터 사이의 관계와 논리를 설명해가는 논리형 언어

* 절차적 언어 + 객체지향 언어
1. 목표설정하기
2. 흐름도 만들기
3. 각 단계를 코드로 표현하기

* 객체, 속성, 메소드, 이벤트

object (객체)
- 사용자가 컨트롤 할 수 있는 객체 대상 ex) 버튼, 링크, 텍스트 박스 등
<button type="button" id="btn"></button>
= button ,id

property(속성)
- 객체가 가지는 속성 
= type, id

event(이벤트)
- 인터넷 브라우저에서 발생할 수 있는 사건

method(메소드) ex)확인, 삭제, 취소, 이동, 애니메이션 등
- 객체의 실행 

A에 마우스를 올리면 B가 나타난다
= '객체에 이벤트 했을때 객체 메소드 실행'

#java script(ECMA Script)
* 자바스크립트는 절차적 언어, 객체지향 언어이다
## 자바스크립트 작성 위치
* `<ahead>`,`<body>`내에`<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url">...</script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`,`async`\
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생명 키워드 종류
1. `var` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수선언문
2. `let` : 중복선언 불가능하고 대입된값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + '1'`
3.  `+=` : 복합 대입 연산자 `x += y` -> `x = x+y`
---------------------------------------------------------------------
## null 과 undefined

- null은 값이 존재 하지않은 비어있는것
- undefined 정의하지않은것

- 숫자 초기화 방법
ex) g = 0; // 
- 존재하는 변수 값을 제거해야할 때
ex) g = null; //

- var, let, const는 생성된 변수에 대입되는 값에 따라 데이터가 결정된다.(데이터 타입은 X 없다.)

-------------------------------------------------------------------
## 배열
- 배열을 사용하지 않았을 때(같은 주제 기준 데이터가 2개 이상)
- 배열을 사용한 경우
    - 배열의 인덱스(자바스크립트 데이터 순서)는 0부터 시작한다.
    - 배열의 length 문자열길이(개수)는 1부터 시작한다.

## 배열 값 추가, 삭제 메서드 (자주 사용하는 종류)
- push 배열의 끝에 새로운 값 추가
- unshift 배열의 시작에 새로운 값 추가 
- pop 끝값 제거
- shift 시작 값 제거
- delete 해당속성 제거 

## Dom(Document Object Model)
- getElementsByTagName
    *HTML tagNode가 2개 이상일 떄 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고(변수 바로뒤에getElementsByTagName('h1')[]<--대괄호 붙이기 ) 대입하기
    * HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입(변수뒤에 대괄호 쓰지말라)하고 해당DOM 변수 호출시 필요한 경우[index] 사용하기(consol 뒤에 대괄호 붙여라)
    --dom1.js 참고!!!

-  DOM Node 변수 지정 시 
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 
    실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는
    직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]

## DOM - class, Id
    
    1.getElementsByClassName 
-  Class지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다.
-  dom2.js 참고!!!

    2.getElementsByIdName
-  부모생각 안하고 써도됨
-  dom3.js 참고!!!

    3.querySelector
-   
    4.querySelectorAll
-

    5. value
-   form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
-   form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
-   javascript의 DOM.속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1.  쇼핑몰의 상품수량
2.  쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등....
* 주의사항 -> value속성은 form 전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의 사항 -> `DOM.value` 로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number) 데이터타입으로 변환해야한다. ex`Number(객체,value())`

- onclick 클릭했을때
- onmouseover 마우스가 HTML 요소에 올라 갔을떄
- onmouseout  마우스가 HTML 요소에서 벗어났을떄
- onchange input 요소의 값이 변경되었을때
- onsubmit  
- onload

이벤트 리스너 등록과 삭제
addEventListener 메서드는 함수를 이용한 이벤트 지정방식입니다.

이벤트 대상 .addEventListener(이벤트종류, 이벤트콜백함수, 이벤트 단계)
* 이벤트 단계는 true, false(기본값)중 하나로 설정할 수 있습니다.

- 하나의 요소에 여러개의 이벤트 리스너를 등록할 수 있습니다.
- HTML요소를 포함 모든 DOM 노드에 이벤트 리스너를 등록할 수 있습니다.
- 다양한 추가 메서드를 이용하여 이벤트를 정밀하게 제어할 수 있습니다.

DOM 관계속성
parentNode  부모노드
parentElement   부모요소참조
childNodes  자식요소참조  
firstchild  첫번째 자식 노드
firstElementChild 첫번째 자식 요소 참조
lastChild 마지막 자식 노드
lastElementChild 마지막 자식 요소 참조


## DOM 관계속성

1. parentNode 부모 노드, parentElement 부모요소
    - parentNode.parentNode 연속 사용 (부모의 부모 잡기)
    - 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서 css 제어하기 -> style 속성
    - DOM. 관계. Style = "속성:값"; 속성:값; 속성:값;";
        * (위) style 2번 이상 생성 시 이전 속성:값 제거됨
    - DOM. 관계. 관계. Style. 속성 = "값";
        * (위) style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    - DOM. Style. 속성 = "값";
    - 위 관계는 필요에 따라 선택 속성

//----------------javascript에서 css 동적 설정-------------------
// 객체 속성(css) 이벤트 메서드 // {} .title color font-size (속성)
// 객체.속성(css)
// 객체.속성.속성(css)
// 자바스크립트에서 css를 적용할땐 인라인 스타일로 적용된다.
// 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로 
// 기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선 적용된다.
/* aNode[0].parentNode.style = 'background-color:tomato; border:2px solid skyblue; border-radius: 10px; padding:10px;'
aNode[0].parentNode.style = 'transform:skewX(20deg)' */
// 추가속성 적용되면 덮어쓰기 된다.
//객체.객체.속성 = '속성:값; 속성:값; 속성:값;'
/* aNode[1].parentNode.style.backgroundColor = 'aqua';
aNode[1].parentNode.style.border = '3px solid blue';
aNode[1].parentNode.style.transform = 'rotate(-10deg)';
// 추가속성을 적용하면 덮어쓰기 되지 않는다.
 */
//객체.객체.속성.속성 = '값'; --한번에 하나씪 다른거는 새로 쓴다.

childNodes, children, childElementCount

 빨강 error, undifined, null 출력 없이 올바른 Node 출력이 되는지
 첫번째 자식, 마지막 자식 노드 잡기
 firstChild, firstElementChild
 lastChild, lastElementChil
-------------------------형제노드잡기
 이전 형제 previousSibling, previousElementSibling
 다음 형제 nextSibling, nextElementSibling
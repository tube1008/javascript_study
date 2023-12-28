// DOM document object model

const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag[0]);
/* 
    getElementsByTagName
    *HTML tagNode가 2개 이상일 떄 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고(변수 바로뒤에getElementsByTagName('h1')[]<--대괄호 붙이기 ) 대입하기
    * HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입(변수뒤에 대괄호 쓰지말라)하고 해당DOM 변수 호출시 필요한 경우[index] 사용하기(consol 뒤에 대괄호 붙여라)
*/


//상황1. ul에 동적인 기능이 필요한 경우
const ulTag = document.getElementsByTagName('ul')[0];
console.log(ulTag);
//상황2. ul-li 3개 모두에 동적인 기능이 필요한 경우
const liTag = ulTag.getElementsByTagName('li');
console.log(liTag[0])
console.log(liTag[1])
console.log(liTag[2])
//상황3. ul-li-a 중 두번째 a만 동적인 기능이 필요한 경우
const aTag = liTag[1].getElementsByTagName('a');
console.log(aTag);
//상황4. ul-li-a 3개의 a에 동적인 기능이 필요한 경우
const aaaTag = document.getElementsByTagName('a');
console.log(aaaTag[0]);
console.log(aaaTag[1]);
console.log(aaaTag[2]);
/* 
    DOM Node 변수 지정 시 
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 
    실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는
    직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
*/
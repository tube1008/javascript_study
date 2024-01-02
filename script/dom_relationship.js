// DOM의 부모잡기 : parentNode, ParentElement

const aNode = document.querySelectorAll('nav a');
console.log(aNode, aNode[0], aNode[1]);
console.log(aNode[0].parentNode); //nav
console.log(aNode[1].parentNode); //nav 부모가 같아서 결과가 같다 
console.log(aNode[0].parentElement); //nav  
console.log(aNode[1].parentElement.parentElement); //header
console.log(aNode[1].parentNode.parentNode); //header 결과가 같음

aNode[0].addEventListener('mouseover',function(){
    //nav 배경색 노랑
    aNode[0].parentNode.style.backgroundColor = 'yellow';
    //header 배경색하늘
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
})
//aNode에서 마우스 나갔을 때 배경색 제거하기(none)
aNode[0].addEventListener('mouseout',function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
})
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
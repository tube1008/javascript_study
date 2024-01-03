const header = document.querySelector('header');
const headerchild = header.childNodes;
console.log(header, headerchild)
console.log(header.childElementCount); //lenth와 동일하게 1부터 셈

console.log(headerchild[1]);
console.log(headerchild[3]);
console.log(headerchild[1].innerText);
console.log(headerchild[1].innerHTML);
console.log(headerchild[3].innerText);
console.log(headerchild[3].innerHTML);

// headerchild[1].innerText = '로고';
// console.log(headerChild[1].childNodes[0])
// headerChild[1].childNodes[0].innerText = '로고';
// headerChild[1].children[0].innerHTML = '로고로고';


//Q. menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
//1. menu1 변수 생성하기(h1-a가 아닌 nav-a 만 잡는 방법(콘솔체크))
//1-1. (위 변수 생성 이유) 마우스 올리는 대상, 변경 글자 대상
//2. 변수 이용 이벤트 핸들러 addEventListner
//2-1. 마우스 올리면 이벤트 종류 찾기
//2-2. 마우스 올렸을때 실행 결과 이벤트 내 function 안에 적성 준비
//3. 글자를 변경하는 속성이 뭔지 체크 문법에 맞춰서 작성 
//3-1. 객체. 속성 = '값' 속성 값 변경하는 문법
const nav = document.querySelector('nav')
console.log(nav.childNodes[1])
nav.childNodes[1].addEventListener('mouseover',function(){
    console.log(nav.childNodes[1].innerText)
    nav.childNodes[1].innerText = '메뉴1';
})

//Q. menu2 마우스를 올리면 menu2 -> 메뉴2 글자 변경
const nav1 = document.querySelector('nav')
console.log(nav.childNodes[3])
nav.childNodes[3].addEventListener('mouseover',function(){
    console.log(nav.childNodes[3].innerText)
    nav.childNodes[3].innerText = '메뉴2';
})

//main- 장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기 

const mainNode = document.querySelector('main')
//1. main-cart 변수 생성하기
const cart = mainNode.querySelector('.cart')
//2. span.all 변수 생성하기
const all_count_view = mainNode.querySelector('span.all');
//3. main-cart의 자식 item 개수 체크하기
const cart_item_count = cart.childElementCount;
console.log(mainNode, cart, all_count_view, cart_item_count);
//4. span.all 변수에 위(3번) 값 대입하기
all_count_view.innerText = cart_item_count

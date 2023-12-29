// 객체는 반드시 변수에 저장하고 진행해야 한다.!!
let a = 10;
let b ='10';
let c = 1;

a = b+c // 101
a += a //(+=복합대입연산자) 101101

b = c // 1
a += b // 1011011

b = a+b+c // 101101111

const array = [1,2,3,4,5]

c = c+array[2]

//함수는 생성하고 호출을 따로 해야한다
const x = 10
const y = 5

function ca(){
    console.log(c+array[4]+array[0])
}

ca()

function xy(){
    console.log(x+(y-1))
} //생성

xy() //호출(생성밖에서 호출해야한다.)

const cart = {
    img:'./imgmodel.jpg',
    sale:'50% OFF',
    name:'Crop Top',
    fit_size:'Bodu Fit',
    color:['Mineral Black','Chocolate Brown','Cobalt Blue/Iris Blue',
    'Evening Blue','Jewel Green'],
    size:['XS','S','M','L','XL','XXL'],
    price:27.50,
    price_original:55,
    num:1
} 
console.log(cart)
console.log(cart.name)
console.log(cart.color[2])
console.log()


/* 
자바스크립트에서 사용하는 괄호 개념
    1. () : 메서드, 연산자 우선순위, 배열 빈공간, 배열선언, 함수
    메서드 : 객체.메서드();
    연산자 : 1+(1-2) // 우선순위 만들때
    배열 빈공간 : new Array(2) 값이 하나일때 빈공간으로 인식
    배열 선언 : new Array(1,2)
    함수 : function()

    2. {} : 함수실행값, 객체선언
    함수실행값 : function(){}
    객체선언 : let object = { 속성: 값, 속성;[값1, 값2, 값3],}

    3.[] : 배열생성, 배열인덱스호출, 불러온 DOM객체가 2개 이상일 때 인덱스호출용
    배열생성 : let 변수명 = [배열값, 배열값,]
    배열인덱스호출 : 변수명[인덱스]
*/
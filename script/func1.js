//함수 스코프
//지역변수와 전역변수
/* let b = 20
let c = 30
let a = ''
scope1() // 함수 호출 위치는 생성 위치와 관계 없다.
function scope1(){
    a = 10
    console.log(a, b, c) // 
}
console.log(a+(b+c)) */

// 함수 스코프연습
let x = 1
let y
function func1(){
    y = 5
    console.log(x+y)
}
function func2(){
    let z = 10
    func1()
    console.log(x+y+z) //error)
}

func2()

console.log('-----------------------------------')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
console.log(btn)

/* btn.addEventListener('click', function(){
    console.log('결과테스트')
}) */

function testFunc(){
    console.log('결과테스트')
}
btn.addEventListener('click',testFunc)
btn2.addEventListener('click',testFunc)
//이벤트 함수 개별 선언 연습

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const num_view = document.querySelector('#num')
const priceView = document.querySelector('.price')
console.log(plus, minus, num_view)
let price = 4000
let num = 1
let total = 0

function coffee1(){
    num < 10 ? num++ : alert('최대 구매 수량입니다.')
    num_view.value = num
    total = num*price
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
}
function coffee2(){
    num > 1 ? num-- : alert('최소 구매 수량입니다.')
    num_view.value = num
    total = num*price
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
}
plus.addEventListener('click',coffee1)
minus.addEventListener('click',coffee2)
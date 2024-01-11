const user = [{
    name: 'lee',
    age:20,
},{
    name: 'kim',
    age:30,
}]

function a(){
    let num_a = 1
    console.log('a 함수 위치'+num_a)
    user[0].age++
    console.log(user[0].age)
    b()
}
function b(){
    let num_b = 1
    user[1].age++
    console.log(user[1].age)
    console.log('b 함수 위치'+num_b)
}
a() //a를 호출하면서 b도 같이 불러주려면 a안에 b() 호출을 넣어준다

//Q. 콜라만 나오는 자판기

/* function japangi(){
    console.log('콜라')
}
function japangi2(){
    console.log('사이다')
}
japangi()
japangi()
japangi2() */

//Q 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){//drink 매개 변수 생성 ex) let drink;와 동일
    console.log(drink)
}

japangi("콜라")
japangi("사이다")
japangi("커피")
japangi("탄산수")

function japangi_v2(drink, num){
    console.log(drink+num+'개 나왔습니다.')
}
japangi_v2('탄산수',1000)
japangi_v2('콜라',1000)

console.log('--------------------------------------------------')

//Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기
function calc1(number1,number2){
    console.log(number1+number2)
    console.log(`${number1}+${number2}=${number1+number2}`)
}
calc1(24,42)

//Q 피연산자 2개와 산술 연산자를 설정해서 자유로운 계산이 가능한 함수 만들기
let result
function calc2(num1,num2,oper){
    result = oper=='/' ? num1/num2 : null;
    console.log(`${num1} ${oper} ${num2} = ${result}`)
}
calc2(10,2, '/')

console.log('--------------------------------------------------')
let total = 0
// 함수의 데이터값 반환 return
function func3(num){
    return num+1
    total = num+1 
    //return을 맨위에 두면 밑에 있는 모든것들은 지워진다 
    //반드시, 맨아래에 둬야함!
}
console.log(total) // 0
console.log(func3(5))
window.alert(func3(10))

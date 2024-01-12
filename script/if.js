console.log(true) // true == '참' == 1
console.log(false) // false == '거짓' == 0
console.log('false')//문자
console.log(true+1) //2
console.log(true+true) //2
console.log(true+false)
console.log(true+true+'true')
console.log(typeof true)//boolean type of는 데이터타입 확인하는 연산자
console.log(typeof(true+true)) // Number 괄호를 넣어줘서 ..
console.log(typeof false+10) // 괄호를 넣지 않으면 boolean 10 나옴
console.log('-----------------------------')
console.log("42" == 42) //true (자료가 같기 때문 (데이터타입 무시))
console.log('42' === 42) // false (데이터 타입이 다르기 때문)
console.log(10 != '10') // false(자료가 같기 때문(데이터 타입 무시))
console.log(10 !== '10') // true(데이터타입이 다르기 때문)
console.log(5 < 7) // true
console.log(5 > 7) // false
console.log("5" < 7) // true (데이터타입 구분을 안하니까)
console.log("a" < 7) // false (에러가 안났을 뿐이지 잘못된것)
console.log(10 <= 20) // true
console.log(10 >= 20) // false
console.log('--------------------------------')
let a = 10
let b = 20
let c = "15"
let d = 15
let result

result = a == b
console.log(result)
console.log('-------------------------------')
a = true;
b = false;

//논리 연산자란?
// 비교연산 또는 논리 데이터를 좌우 두 값으로 두고 논리적으로 비교하는 연산자
result = a && b // true && false = false //ex) 로그인 아이디 비밀번호에 쓰인다
console.log(result)

result = a || b // true || false = true
console.log(result)

console.log(!a) //반전 false
console.log(!b) //반전 true
console.log(a, b) // 원본데이터는 영향 없음

// 논리 연산자 우선순위
// () >> Not >> AND >> OR

result = !(true || false) && !false; //
console.log(result)


// 조건문
//1. 목표 세우기 (날씨가 맑으면 산책간다.)
// 1-1 세부목표나누기
// 1-2 조건 : 날씨가 맑으면
// 1-3 조건 참일 때 실행 : 산책 간다
//2. 조건문 문법 정리
// 2-1 조건 : if(날씨가 맑으면)
// 2-1-1 조건 결과가 논리 데이터로 나오도록 비교 연산자 사용 : if (날씨==맑다)
// 2-2 조건이 참일때 실행 : 실행 메서드 결정
// 2-2-1 window.alert(산책)
// =-==================================================
//1. 목표 세우기 (날씨가 흐리지 않으면 운동한다)
// 세부목표
// 조건 : 날씨가 흐리지 않으면
// 조건 : 참 일때 실행 : 운동한다
// 문법 정리
// 조건 if(날씨가 흐리지 않으면)
// 비교연산자 (날씨 != 흐림)
// 조건이 참일때 실행 : 메서드 결정
//  window.alert(산책)

// 목표세우기 (하루걸음수가 5천걸음이상이면 간식을 먹는다.)
// 조건 : 하루걸음수가 5천걸음 이상이면
// 참일때 실행 : 간식을 먹는다 
// 문법정리
// if(걸음수가 5천걸음이상이면)
// (걸음수 >= 5천보 )
// 간식 챱챱!

const x = 20;
const y = "20";

// 1. x 가 y 보다 작을때 참
if(x < y){
    console.log('x는 y보다 작다')
}

// 2. x가 y와 다를 때 참
if(x!==y){
    console.log('x는 y와 다르다')
}

// 3. x와 y가 같으면 참
if(x == y){
    console.log('x와 y는 같다')
}

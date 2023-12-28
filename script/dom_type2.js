const num = document.querySelector('#num');
const numBtn = document.querySelector('#numBtn');
console.log(num, numBtn);
function plus(){
    //(아래) 또 다른 결과 (프로그래밍 깔끔하게 쓰기)
    let result = Number(num.value); //값출력확인 1.
    num.value = (result + 1);
    console.log(result += 1); //더하기 출력 확인
}

/* 
console.log(num.value) // 값출력 확인
console.log(num.value+1) // 더하기 출력 확인x
console.log(typeof num.value) //문제해결하기 위한 데이터 확인 -> number
console.log( number(typeof num.value)+1) // 더하기 확인 ok 
num.value = number(num.value)+1 // 출력 대상 바꿔서 확인
*/


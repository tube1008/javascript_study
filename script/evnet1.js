const btn1 = document.querySelector('#btn1');
console.log(btn1); // 변수가 정상적으로 등록 확인


btn1.addEventListener('mousedown',function(){
    console.log('hello brn1');
});

// btn2 클릭시 윈도우 질문답변창으로 1+1을 물어보고 그결과 팝업으로 출력하기
const btn2 = document.querySelector('#btn2');
console.log(btn2);

btn2.addEventListener('click',function(){
    const qa = Number(window.prompt('1+1'));
    window.alert(qa+1)
})

//btn3 누를시 구글 주소로 바로가기
const btn3 = document.querySelector('#btn3');
console.log(btn3);

btn3.addEventListener('mousedown',function(){//익명, 콜백 함수
    const aa = window.location.href='https://google.com';
    console.log(aa);
})

// 인증확인 버튼 클릭 시 input에서 입력한 값이 팝업창으로 출력
// 출력 메세지 예) 0000 입력 확인 되었습니다.
const certified_txt = document.querySelector('#certified_txt');
const certified_btn = document.querySelector('#certified_btn');
console.log(certified_btn, certified_txt);

certified_btn.addEventListener('click',function(){
    console.log('.') //이벤트 함수 정상 동작 체크
    console.log(certified_txt.value) // 값 동작 체크 
    let certified_input = certified_txt.value //nuber, 문자 등 여러가지 사용 하면서 단순해지게 만든다..
    window.alert(`${certified_txt.value}입력 확인 되었습니다.`)
})

//총 수입 버튼을 클릭스 월급+보너스 더한 결과가 팝업으로 출력
//결과 예시) 총 수입은 00원 입니다.

const input_pay = document.querySelector('#result1');
const input_bonus = document.querySelector('#result2');
const answer_btn = document.querySelector('#answer_btn');
console.log(input_pay, input_bonus, answer_btn); //변수 정상 확인

answer_btn.addEventListener('click',function(){
    console.log('.'); // 이벤트 정상확인
    console.log(input_pay.value, input_bonus.value); // 값 정상 확인
    console.log(input_pay.value+input_bonus.value); // 더하기 확인
    console.log(typeof(input_pay.value+input_bonus.value)); // 계산이 안되는 문제(데이터) 확인 => string => 문제 해결(Number)
    let total = Number (input_pay.value) + Number (input_bonus.value)
    //결과를 담는 변수 생성후 대입
    console.log(total);
    window.alert(`총 수입은 ${total}원 입니다.`);
})
// 자바스크립트 은행
// 입금전 잔액 : 10000원(버튼 클릭 전 미리 보이는 값)
// 입금액(자유) 입금 시 마다 +100원이 더해져서 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행되는 구조

const bank_input = document.querySelector('#bank_input'); // 입금 input
const bank_total = document.querySelector('#bank_total'); // 총잔액 input
const bank_btn = document.querySelector('#bank_btn'); // 입금버튼
let total = 10000 //number
console.log(bank_input, bank_total, bank_btn);
bank_total.value = total

bank_btn.addEventListener('click',function(){
    console.log(Number(bank_input.value) + 100) // 더하기 결과 확인
    console.log(total + Number(bank_input.value)) // 총 잔액 더하기 결과 확인
    let input_total = Number(bank_input.value) + 100 // 입금액 + 이자
    total += input_total; //total = total + input_total;
    bank_total.value = total;
    //입금액 입력값 초기화
    bank_input.value = ''; // 중요 //
})
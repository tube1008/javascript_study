// 문자열 변환 메서드
// let price = 1000000000;
// 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString() 사용합니다. 중간에x
// console.log(price.toLocaleString('ko-kr'));
// HTMLNode.value = price.toLocaleString('ko-kr')

// 총잔액 10,000원 시작 기준 입금 시마다 100원 더하기(총잔액 항상 콤마처리로)

const bank_input = document.querySelector('#bank_input');
const bank_total = document.querySelector('#bank_total');
const bank_btn = document.querySelector('#bank_btn');
let total = 10000
console.log(bank_input, bank_total, bank_btn);
bank_total.value = total

bank_total.value = total.toLocaleString('ko-kr')
bank_btn.addEventListener('click',function(){
    console.log(total + Number(bank_input.value));
    let input_total = Number(bank_input.value) + 100;
    total += input_total; 
    bank_total.value = total.toLocaleString('ko-kr')
    bank_input.value = '';
})

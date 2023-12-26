// 외부스크립트
let a = 'ABC'; //문자는 따옴표를 꼭 해줘야함!
console.log(`a => ${a}, a의 type은 ${typeof a}`);
let b = 'DEF';
console.log(`b => ${b}, b+a의 type은 ${typeof (b+a)}`); // 괄호를 써야하는 경우 피연산자를 두개 이상 놨을때 괄호를 쳐야함
const alpa = ['ABC','DEF']
console.log(`alpa배열의 값은 ${alpa}`);
console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}`); //index
console.log(`배열의 개수 확인 => ${alpa.length}`); //총개수 lenth 속성

const yoil = new Array('월','화','수','목','금','토','일');
const weather = new Array('맑음','흐림','비','눈')
// 월(맑음) 
console.log(`${yoil[0]}` + `(${weather[0]})`);
// 화(눈)
console.log(yoil[1] + weather[3]);
// 수(비)
console.log(yoil[2] + weather[2]);
// 목(흐림)
console.log(yoil[3] + weather[1]);
// 금(맑음)
console.log(yoil[4] + weather[0]);
// 토(맑음)
console.log(yoil[5] + weather[0]);
// 일(눈)
console.log(yoil[6] + weather[3]);
//-----------------------------------------
const nameArray = ['김','이','박','최'];
console.log(nameArray);
// 배열 값 추가, 삭제 메서드 (자주 사용하는 종류)
nameArray.push('안'); //push 배열의 끝에 새로운 값 추가
console.log(nameArray);
nameArray.unshift('방'); //배열의 시작에 새로운 값 추가
console.log(nameArray); // 끝 값 제거
nameArray.pop();
console.log(nameArray);
nameArray.shift(); //시작 값 제거
console.log(nameArray);

const h1 = ['0','0','0','0','0','0','0'];
const h2 = ['0','0','0','0','0','0','0'];
const h3 = ['0','0','■','0','0','■','0'];
const h4 = ['0','■','0','■','0','■','0'];
const h5 = ['0','■','0','■','0','■','■'];
const h6 = ['0','■','0','■','0','■','0'];
const h7 = ['0','■','0','■','0','■','0'];
const h9 = ['0','0','0','0','0','0','0'];
const h10 = ['0','■','■','■','0','■','0'];
const h11 = ['0','0','0','■','0','■','0'];
const h12 = ['0','■','■','■','0','■','■'];
const h13 = ['0','■','0','0','0','■','0'];
const h14 = ['0','■','■','■','0','■','0'];
const h15 = ['0','0','0','■','0','0','0'];
const h16 = ['0','0','■','0','■','0','0'];
const h17 = ['0','0','0','■','0','0','0'];
const h18 = ['0','0','■','0','0','0','0'];
const h19 = ['0','■','■','■','■','0','■'];
const h20 = ['0','0','■','0','■','0','■'];
const h21 = ['0','■','0','■','■','■','■'];
const h22 = ['0','0','■','0','■','0','■'];



console.log(h1);
console.log(h2);
console.log(h3);
console.log(h4);
console.log(h5);
console.log(h6);
console.log(h1);
console.log(h1);
console.log(h9);
console.log(h10);
console.log(h11);
console.log(h12);
console.log(h13);
console.log(h14);
console.log(h15);
console.log(h15);
console.log(h16);
console.log(h17);
console.log(h9);
console.log(h9);
console.log(h18);
console.log(h19);
console.log(h20);
console.log(h21);
console.log(h22);
console.log(h9);
console.log(h9);

//-----------------------------------------

const movie = new Array(8);
// console.log(movie);
// movie.push('A1')
// console.log(movie)
// movie.unshift('A1')
// console.log(movie)

movie[0] = 'A1';
console.log(movie);

console.log('-------------------------')

const megabox = new Array();
console.log(megabox);
megabox.push('A1');
console.log(megabox);
megabox.push('B3');
console.log(megabox);
megabox.pop();
console.log(megabox);

//반복문 for
//for(초기값선언; 조건식; 증강식){괄호 안 조건식이 참일때 반복실행 결과}
//1~10 반복문
//for 지역함수 안에서 작성되는 변수명 = i, j, m, n
// for(let i=1; i<=10; i++){console.log(`i=${i}`)}
// //5~10 반복문
// for(let j=5; j<=10; j++){console.log(`자바스크립트j=${j}`)}
// //5~0 반복문
// for(let m=5; m>=0; m--){console.log(`반복문m=${m}`)}
// //1,3,5,7,9 반복문
// for(let n=1; n<=10; n++){
//     if(n%2==1){
//         console.log(`홀수${n}`)
//     }else{
//         console.log(`짝수${n}`)
//     }
// }

//-----------------------------------------------------------
// const study = ['illustrator','photoshop','figma','html','css','javascript']
//반복문 활용 study 배열 값 한번에 출력하기
//1. illustrator 공부
//2. ...
/* for(let i=0; i<6; i++){
    console.log(`${i+}. ${study[i]} 공부`)
}
for(let i=0; i<study.lenth; i++){
    console.log(`${i+1}. ${study[i]} 공부`)
} */
// for(let i=study.length-1; i>=0; i--){
//     console.log(`${i+1}. ${study[i]} 공부`)
// }

// -----------------------------------------------------------

const menuAll = document.querySelectorAll('nav a')
for(let i=0; i<menuAll.length; i++){
    console.log(menuAll[i])
    if(i%2){
        menuAll[i].classList.add('bg1')
    }else{
        menuAll[i].classList.add('bg2')
    }
}
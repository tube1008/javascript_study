// 객체 object
// 데이터 저장소 = 변수(한번에 한가지값), 배열(2개 이상의 값) 
// 특정 값 에 해당되는 속성을추가해서 데이터 관리를 용이

const cat = {
    color:'black',
    age:1,
}

console.log(cat);
console.log(cat.color);
console.log(cat.age);
//1살 black 고양이 분양합니다.

console.log(`${cat.age}살 ${cat.color} 고양이를 분양합니다.`)
// console.log(cat.length) //undefined 객체에서 아무것도 정해진게 없어서 뜸.
const cat2 = {
    color:['white','yellow','black'],
    age:2
}
console.log(cat2);
// 고양이의 털 색깔은 yellow, white, black으로 이루어져 있습니다.
console.log(`고양이의 털 색깔은 ${cat2.color[1]},${cat2.color[0]},${cat2.color[2]}으로 이루어져 있습니다.`);

const cat3 = {
    name:'점박이',
    'cat type':'코리안 숏헤어',
    color:['white','black'],
    age:1,
    gender:'암컷',
    adoption:'입양전',
    breeding:'중성화 전',
    health:'건강양호'
}
console.log(cat3);
console.log(cat3['cat type']);
// console.log(cat3. 'cat type'); // error
/*
    코리안 숏헤어
    흰색, 검은색 고양이
    1살
    암컷
    입양전
    중성화 전
    건강양호
*/
//입양 전 -> 입양완료
cat3.adoption = '입양완료'
console.log(cat3);
//중성화 전 -> 중성화 완료
cat3.breeding = '중성화 완료'
console.log(cat3);
//1 -> 2
cat3.age += 1 
console.log(cat3);

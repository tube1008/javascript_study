//24/1/3 자식 노드 제어하기
// childNodes, children, childElementCount
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
console.log(header, main, footer);
// 변수 정상 작동 확인
// 빨강 error, undifined, null 출력 없이 올바른 Node 출력이 되는지!
const headerText = header.childNodes;

console.log(headerText); // 텍스트 노드 인덱스 출력 
console.log(headerText[0]); //"header"
console.log(headerText[0].data); //"header"
console.log(headerText[0].length); // 6 글자 수
console.log(headerText[0].baseURI); // 경로

//main, footer
const mainText = main.childNodes;

console.log(mainText);
console.log(mainText[0]); 
console.log(mainText[0].data);
console.log(mainText[0].length)
console.log(mainText[0].baseURI)

const footerText = footer.childNodes;

console.log(footerText);
console.log(footerText[0]); 
console.log(footerText[0].data);
console.log(footerText[0].length)
console.log(footerText[0].baseURI)
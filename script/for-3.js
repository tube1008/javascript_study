const target = document.querySelector('.target')
const ul = document.createElement('ul') // 태그생성
let li = document.createElement('li')
console.log(target, ul)

for(let i=0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품${j+1}</span>`
    }
    ul.appendChild(li)
}
target.appendChild(ul)
console.log(ul)

const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')
console.log(target2, dt, dd)

for(let i=0; i<2; i++){
    dt = document.createElement('dt')
    dt.innerHTML = '제목1'
    target2.appendChild(dt)
    for(let n=0; n<2; n++){
        dd = document.createElement('dd')
        dd.innerHTML = `제목2${n+1}`
        target2.appendChild(dd)
    }
}


// dt.innerHTML = '정의형 제목'
// target2.appendChild(dt)
// for(let n=0; n<2; n++){
//     dd = document.createElement('dd')
//     dd = innerHTML = '정의형 내용'
//     target2.appendChild(dd)
// }
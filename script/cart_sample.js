// 왼쪽 썸네일 이미지 JS
// 1. small_thumnail-a 마우스를 올리면
// 2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경

const item_detail = document.querySelector('.item_detail');
const small_thumnail = item_detail.querySelectorAll('.small_thumnail a');
const big_thumnail = item_detail.querySelector('.big_thumnail img');
console.log(small_thumnail, big_thumnail, item_detail);

small_thumnail[0].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_immages/bigdog1.jpg"
})
small_thumnail[1].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_immages/bigdog2.jpg"
})
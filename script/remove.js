// X버튼을 클릭시 X가 포함된 li태그 지우기
const cart = document.querySelector('.cart')
const cart_item = document.querySelectorAll('.cart li')
const delete_item_btn = document.querySelectorAll('.delete_btn')
console.log(cart, cart_item, delete_item_btn)
// 쿼리셀렉트ALL 이 들어가면 변수뒤에 인덱스를 붙여준다
//요소 노드 제거하기 remove, removeChild()
//요소.remove() -- 요소를 제거한다.
//요소.removeChild() -- 요소 안 () 괄호에 자식노드를 제거한다.
delete_item_btn[0].addEventListener('click',function(){
    // cart_item[0].remove();
    cart.removeChild(cart_item[0])
})
// delete_item_btn[1].addEventListener('click',function(){
//     cart_item[1].remove();
// })
// delete_item_btn[2].addEventListener('click',function(){
//     cart_item[2].remove();
// })
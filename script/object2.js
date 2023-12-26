// 예약 시스템

const reservation = {
    room:1,
    adult:2,
    children:1,
    option:'금연'
}
console.log(reservation);
// 방1개 -> 2개예약
reservation.room += 1;
console.log(reservation);
delete reservation.option; //해당속성 제거 기능
console.log(reservation);
reservation.option = '금연'; //객체 속성 추가(변경 동일)
console.log(reservation);

// 변수로 도형의 x, y, z 값 담기
// 객체로 도형의 x, y, z 값 담기
//x 50, y 100, z 0

let ShapeX = 50;
let ShapeY = 100;
let ShapeZ = 0;
console.log(ShapeX, ShapeY, ShapeZ);

let Shape = {
    x:50,
    y:100,
    z:0
};
console.log(Shape);

//------------------------------------
const user = {
    name:'박',
    age:20,
    birthday:function(){
        console.log('생일ㅊㅋ')
    },
}
console.log(user.birthday())
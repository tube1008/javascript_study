let num = 0;
function clickNum(){
    num+=1
    console.log(num)
}

const obj = {
    name:'김모모',
    gender:'남성',
    birthday:function(){
        console.log(`${obj.name}야 생일 축하해~!`)
    }//익명함수
};
//---------------------------------------------
const member = [
    {
        name:'김모모',
        age:20,
    },{
        name:'박모모',
        age:21,
    },{
        name:'이모모',
        age:22,
    } //{}회원들의 정보를 묶어주는 각각
]// 회원들을 묶어주는 배열묶음

console.log(member);

const item = [
    {
        brandName:'청정원',
        productName:'파스타소스',
        sale:'38%',
        price:13900,
        reviewPoint:'4.7',
        reviewNum:'7,620',
        delivery:'무료배송',
        option:'특가',
        cardOption:'최대 10% 결제할인',
    },
]
console.log(item);
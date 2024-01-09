const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
console.log(height, weight, goals, result)

result.addEventListener('click',function(){
    let normal_w = (Number(height.value - 100)*0.9);
    goals.value = `적정체중은 ${normal_w}kg이며 ${normal_w - Number(weight.value)}kg 초과되셨습니다.`
})  
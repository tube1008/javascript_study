const btn = document.querySelector('#btn')
const top_btn = document.querySelector('#top')
const header = document.querySelector('header')

top_btn.style.display = 'none'
header.style.transition = 'top 0.3s'

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 300){
        header.style.top = '-50px'
    }
    // console.log('.')
    // console.log(window.pageYOffset)
    // btn.innerHTML = Math.floor(window.pageYOffset)
    // if(window.pageYOffset > 200){
    //     top_btn.style.display = 'block'
    // }else{
    //     top_btn.style.display = 'none'
    // }
})


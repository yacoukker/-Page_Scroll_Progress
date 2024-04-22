let elm = document.querySelector(".scroll") ;

let h = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

window.addEventListener("scroll" , ()=>{
    let scrollT = document.documentElement.scrollTop ;
    elm.style.width = `${(scrollT/h) * 100}%` 
})

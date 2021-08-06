const valen = document.querySelector('.valen');
const caro = document.querySelector('.caro');

//console.log(caro)
//console.log(valen)

valen.addEventListener('click', ()=>{
    caro.classList.toggle("spread")
})

window.addEventListener('click')
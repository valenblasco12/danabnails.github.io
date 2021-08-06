const fotos = document.querySelectorAll('.img-fotos')
const fotosLight =document.querySelector('.agregar-foto')
const contenedorLight = document.querySelector('.foto-light')

console.log(fotos)
console.log(fotosLight)
console.log(contenedorLight)

fotos.forEach(foto =>{
    foto,addEventListener('click', ()=>{
        aparecerFoto(foto.getAttribute('src'))
    })
})

const aparecerFoto= (foto)=>{
    fotosLight.src = foto
    contenedorLight.classList.toggle('mostrar')
}
const acord = document.getElementById('acord')
const segundoAcord = document.getElementById('acord-1')
const canciones = document.getElementById('links-canciones')
const canciones2 = document.getElementById('links-canciones-2')


acord.addEventListener('click', e=>{
    e.preventDefault()
    canciones.classList.toggle('acordion')
})

segundoAcord.addEventListener('click', e=>{
    e.preventDefault()
    canciones2.classList.toggle('acordion')
})
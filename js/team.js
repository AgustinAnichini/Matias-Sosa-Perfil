const team = document.getElementById('equipo-fotos')
const foto1 = document.getElementById('foto-1')
const foto2 = document.getElementById('foto-2')
const foto3 = document.getElementById('foto-3')
const foto4 = document.getElementById('foto-4')
const foto5 = document.getElementById('foto-5')
const descripcionGeneral = document.getElementById('descripcion-general')
const descripcionNico = document.getElementById('descripcion-nico')
const descripcionAilen = document.getElementById('descripcion-ailen')
const descripcionBrenda = document.getElementById('descripcion-brenda')
const descripcionArami = document.getElementById('descripcion-arami')
const descripcionCaro = document.getElementById('descripcion-caro')


team.addEventListener('click', view)

function view(e) {
    const id = e.target.id// obtiene ID
    switch (id) {
        case foto1.id:
            descripcionGeneral.classList.add('equipo-display-none')
            descripcionCaro.classList.remove('equipo-display-none')
            // 
            descripcionAilen.classList.add('equipo-display-none')
            descripcionNico.classList.add('equipo-display-none')
            descripcionBrenda.classList.add('equipo-display-none')
            descripcionArami.classList.add('equipo-display-none')
            break;
        case foto2.id:
            descripcionGeneral.classList.add('equipo-display-none')
            descripcionCaro.classList.add('equipo-display-none')
            // 
            descripcionAilen.classList.remove('equipo-display-none')
            descripcionNico.classList.add('equipo-display-none')
            descripcionBrenda.classList.add('equipo-display-none')
            descripcionArami.classList.add('equipo-display-none')

            break;
        case foto3.id:
            descripcionGeneral.classList.add('equipo-display-none')
            descripcionCaro.classList.add('equipo-display-none')
            // 
            descripcionAilen.classList.add('equipo-display-none')
            descripcionNico.classList.add('equipo-display-none')
            descripcionBrenda.classList.remove('equipo-display-none')
            descripcionArami.classList.add('equipo-display-none')
            break;
        case foto4.id:
            descripcionGeneral.classList.add('equipo-display-none')
            descripcionCaro.classList.add('equipo-display-none')
            // 
            descripcionAilen.classList.add('equipo-display-none')
            descripcionNico.classList.remove('equipo-display-none')
            descripcionBrenda.classList.add('equipo-display-none')
            descripcionArami.classList.add('equipo-display-none')
            break;
        case foto5.id:
            descripcionGeneral.classList.add('equipo-display-none')
            descripcionCaro.classList.add('equipo-display-none')
            // 
            descripcionAilen.classList.add('equipo-display-none')
            descripcionNico.classList.add('equipo-display-none')
            descripcionBrenda.classList.add('equipo-display-none')
            descripcionArami.classList.remove('equipo-display-none')
            break;

        default:
            break;
    }
}
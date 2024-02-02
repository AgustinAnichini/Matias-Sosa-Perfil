const team = document.getElementById('equipo-fotos')
const foto1 = document.getElementById('foto-1')
const foto2 = document.getElementById('foto-2')
const foto3 = document.getElementById('foto-3')
const foto4 = document.getElementById('foto-4')
const foto5 = document.getElementById('foto-5')
const descripcionGeneral = document.getElementById('descripcion-general')
const descripcionNico = document.getElementById('descripcion-nico')
const descripcionAilen = document.getElementById('descripcion-ailen')
const descriocionZoe = document.getElementById('descripcion-zoe')
const descripcionArami = document.getElementById('descripcion-arami')
const descripcionCaro = document.getElementById('descripcion-caro')


team.addEventListener('click', view)

function view(e) {
    const id = e.target.id// obtiene ID
    if(window.innerWidth>=1024) {
        switch (id) {
            case foto1.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.remove('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                break;
            case foto2.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.remove('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
    
                break;
            case foto3.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.remove('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                break;
            case foto4.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.remove('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                break;
            case foto5.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.remove('equipo-display-none')
                break;
    
            default:
                break;
        }
    }
    else{
        switch (id) {
            case foto1.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.remove('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                //
                foto1.classList.add('fotosMovile')

                foto4.classList.remove('fotosMovile')
                foto2.classList.remove('fotosMovile')
                foto3.classList.remove('fotosMovile')
                foto5.classList.remove('fotosMovile')
                break;
            case foto2.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.remove('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                //
                foto2.classList.add('fotosMovile')

                foto4.classList.remove('fotosMovile')
                foto1.classList.remove('fotosMovile')
                foto3.classList.remove('fotosMovile')
                foto5.classList.remove('fotosMovile')
                break;
            case foto3.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.remove('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                //
                foto3.classList.add('fotosMovile')

                foto4.classList.remove('fotosMovile')
                foto2.classList.remove('fotosMovile')
                foto1.classList.remove('fotosMovile')
                foto5.classList.remove('fotosMovile')
                break;
            case foto4.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.remove('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.add('equipo-display-none')
                //
                foto4.classList.add('fotosMovile')

                foto1.classList.remove('fotosMovile')
                foto2.classList.remove('fotosMovile')
                foto3.classList.remove('fotosMovile')
                foto5.classList.remove('fotosMovile')
                break;
            case foto5.id:
                descripcionGeneral.classList.add('equipo-display-none')
                descripcionCaro.classList.add('equipo-display-none')
                // 
                descripcionAilen.classList.add('equipo-display-none')
                descripcionNico.classList.add('equipo-display-none')
                descriocionZoe.classList.add('equipo-display-none')
                descripcionArami.classList.remove('equipo-display-none')
                //
                foto5.classList.add('fotosMovile')

                foto4.classList.remove('fotosMovile')
                foto2.classList.remove('fotosMovile')
                foto3.classList.remove('fotosMovile')
                foto1.classList.remove('fotosMovile')
                break;

            default:
                break;
        }
    }
}
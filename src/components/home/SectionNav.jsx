
import { useState } from 'react'
import '../../assets/styles/home/SectionNav.css'


export const SectionNav = () => {

    const [borderResumen, setBorderResumen] = useState(0);
    const [borderItinerario, setBorderItinerario] = useState(0);
    const [borderGaleria, setBorderGaleria] = useState(0);
    const [borderInformacion, setBorderInformacion] = useState(0);
    const [borderComentarios, setBorderComentarios] = useState(0);

    const showBorder = (e) => {

        switch (e.target.className) {
            case 'resumen':
                setBorderResumen(1)
                setBorderItinerario(0)
                setBorderGaleria(0)
                setBorderInformacion(0)
                setBorderComentarios(0)
                break;
            case 'itinerario':
                setBorderResumen(0)
                setBorderItinerario(1)
                setBorderGaleria(0)
                setBorderInformacion(0)
                setBorderComentarios(0)
                break;
            case 'galeria':
                setBorderResumen(0)
                setBorderItinerario(0)
                setBorderGaleria(1)
                setBorderInformacion(0)
                setBorderComentarios(0)
                break;
            case 'informacion':
                setBorderResumen(0)
                setBorderItinerario(0)
                setBorderGaleria(0)
                setBorderInformacion(1)
                setBorderComentarios(0)
                break;
            case 'comentarios':
                setBorderResumen(0)
                setBorderItinerario(0)
                setBorderGaleria(0)
                setBorderInformacion(0)
                setBorderComentarios(1)
                break;
            default:
                break;
        }
    }

    return (
        <div className='content-section-nav'>
            <ul>
                <li><a href="#"><span className='resumen' onClick={(e) => showBorder(e)} style={{ borderBottom: `${borderResumen}px solid black` }}>Resumen</span></a></li>
                <li><a href="#"><span className='itinerario' onClick={(e) => showBorder(e)} style={{ borderBottom: `${borderItinerario}px solid black` }}>Itinerario</span></a></li>
                <li><a href="#"><span className='galeria' onClick={(e) => showBorder(e)} style={{ borderBottom: `${borderGaleria}px solid black` }}>Galería</span></a></li>
                <li><a href="#"><span className='informacion' onClick={(e) => showBorder(e)} style={{ borderBottom: `${borderInformacion}px solid black` }}>Información</span></a></li>
                <li><a href="#"><span className='comentarios' onClick={(e) => showBorder(e)} style={{ borderBottom: `${borderComentarios}px solid black` }}>Comentarios</span></a></li>
            </ul>
        </div>
    )
}
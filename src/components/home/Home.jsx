import '../../assets/styles/home/Home.css'
import { useState, useEffect } from 'react'
import presentation from '../../../public/presentation.png'
import timbre from '../../../public/timbre.png'
import { SectionNav } from './SectionNav.jsx'
import { Resumen } from './Resumen.jsx'
import { Itinerario } from './Itinerario.jsx'
import { Galeria } from './Galeria.jsx'
import { Information } from './Information.jsx'
import { Comments } from './Comments.jsx'


export const Home = () => {

    const [galerys, setGalerys] = useState([])
    

    return (
        <div>
            <div className="presentation">
                <img src={presentation} alt="presentation" />
                <div className='timbre'>
                    <img src={timbre} alt="timbre" />
                </div>
            </div>
            <SectionNav />
            <Resumen />
            <hr className="separador"></hr>
            <Itinerario />
            <hr className="separador"></hr>
            <Galeria galerys={galerys}/>
            <hr className="separador-info"></hr>
            <Information />
            <hr className="separador-comments"></hr>
            <Comments />

        </div>
    )
}



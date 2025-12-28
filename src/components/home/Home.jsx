import '../../assets/styles/home/Home.css'
import { useState, useEffect } from 'react'
import { getAllGallerys } from '../../services/getAllGalerys.js'
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

    const fetchGalery = async () => {
        const data = await getAllGallerys();
        setGalerys(data)
    }

    useEffect(() => {
        fetchGalery()
    },[])

    

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
            <hr class="separador"></hr>
            <Itinerario />
            <hr class="separador"></hr>
            <Galeria galerys={galerys}/>
            <hr class="separador-info"></hr>
            <Information />
            <hr class="separador-comments"></hr>
            <Comments />

        </div>
    )
}



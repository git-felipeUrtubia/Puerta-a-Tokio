import '../../assets/styles/home/Home.css'
import presentation from '../../../public/presentation.png'
import timbre from '../../../public/timbre.png'
import { SectionNav } from './SectionNav.jsx'
import { Resumen } from './Resumen.jsx'
import { Itinerario } from './Itinerario.jsx'

export const Home = () => {
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
        </div>
    )
}

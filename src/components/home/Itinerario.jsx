
import '../../assets/styles/home/Itinerario.css'
import { Card } from './Card.jsx';
import { useEffect, useState } from 'react';
import { getAllTours } from '../../services/Catalog.js'


export const Itinerario = () => {

    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        const data = await getAllTours();
        setTours(data)
    }
    useEffect(() => {
        fetchTours();
    },[])

    return (
        <div>
            <div className='grid-cards'>
                {tours.map(t => (
                    <Card key={t.id_tour} tour={t}/>
                ))}
            </div>
        </div>
    )
}

import { Stars } from "./Stars";
import '../../assets/styles/home/Card.css'



export const Card = ({ tour }) => {
    const { image, title, destinations, details, duration, price, rating } = tour;

    return (
        <div className="card">
            <div className="image-container">
                <img className="card-image" src={image} alt={title} />
                {/* La duración ahora está sobre la imagen, igual que tu diseño */}
                <span className="duration-badge">{duration}</span>
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>

                <div className="route-info">
                    <span className="country-highlight">{destinations}</span>
                </div>

                <p className="route-cities">{details}</p>

                <div className="card-footer">
                    <div className="price-container">
                        <span className="price-label">Desde</span>
                        <span className="price-value">{price}</span>
                    </div>

                    <div>
                        <Stars rating={rating} />
                        <a href="#" className="details-link">
                            <span>Detalle</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
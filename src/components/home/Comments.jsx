import React, { useState } from 'react';
import '../../assets/styles/home/Comments.css'

export const Comments = () => {
  // 10 Comentarios iniciales con longitudes variadas
  const initialComments = [
    {
      id: 1,
      name: "Sofía Martínez",
      date: "28 Dic 2024",
      rating: 5,
      text: "Simplemente increíble. Todo salió perfecto."
    },
    {
      id: 2,
      name: "Alejandro Ruiz",
      date: "26 Dic 2024",
      rating: 5,
      text: "Contratamos el paquete de 'Japón Ancestral' y fue una experiencia que nos cambió la vida. Lo que más agradezco es la paciencia de los guías al explicarnos la historia de cada templo en Kioto. Hubo un pequeño retraso con el tren bala (Shinkansen) por lluvia, pero el equipo de soporte nos reubicó en el siguiente tren en menos de 10 minutos vía WhatsApp. ¡Eso es servicio!"
    },
    {
      id: 3,
      name: "Mariana L.",
      date: "20 Dic 2024",
      rating: 4,
      text: "Muy buena agencia. Los hoteles estaban muy bien ubicados, cerca de las estaciones de metro. Solo le doy 4 estrellas porque me hubiera gustado tener una mañana libre extra en Osaka para compras."
    },
    {
      id: 4,
      name: "Javier T.",
      date: "15 Dic 2024",
      rating: 5,
      text: "100% recomendados. Volveré a viajar con ustedes."
    },
    {
      id: 5,
      name: "Elena Gómez",
      date: "10 Dic 2024",
      rating: 5,
      text: "Estaba muy nerviosa por el idioma y la comida, ya que soy alérgica a los mariscos. La agencia me preparó una tarjeta traducida al japonés explicando mi alergia que pude mostrar en todos los restaurantes. ¡Me salvaron la vida! Pude disfrutar de ramen y okonomiyaki sin miedo. Detalles como este marcan la diferencia."
    },
    {
      id: 6,
      name: "Roberto F.",
      date: "05 Dic 2024",
      rating: 3,
      text: "El viaje estuvo bien, pero creo que el ritmo fue un poco acelerado para ir con niños pequeños. Japón es hermoso, pero caminamos muchísimo."
    },
    {
      id: 7,
      name: "Lucía P.",
      date: "01 Dic 2024",
      rating: 5,
      text: "La ceremonia del té en Uji fue mágica. Gracias por recomendarnos ese lugar fuera de la ruta turística tradicional."
    },
    {
      id: 8,
      name: "Diego S.",
      date: "28 Nov 2024",
      rating: 5,
      text: "Excelente relación calidad-precio. He comparado con otras agencias y Puerta a Tokio ofrece los mejores itinerarios."
    },
    {
      id: 9,
      name: "Carmen Vega",
      date: "20 Nov 2024",
      rating: 4,
      text: "Todo muy organizado. Me encantó Akihabara."
    },
    {
      id: 10,
      name: "Ricardo M.",
      date: "15 Nov 2024",
      rating: 5,
      text: "No tengo palabras. Desde el recibimiento en el aeropuerto de Narita hasta la despedida, todo fue de primera clase. Los ryokans (hoteles tradicionales) que eligieron tenían unos onsen privados espectaculares con vistas al Monte Fuji que nunca olvidaré. Vale cada centavo."
    }
  ];

  const [comments, setComments] = useState(initialComments);
  
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingClick = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.text && formData.rating > 0) {
      const newComment = {
        id: Date.now(), // ID único simple
        name: formData.name,
        date: "Hoy",
        rating: formData.rating,
        text: formData.text
      };
      // Agregamos el nuevo comentario al principio de la lista
      setComments([newComment, ...comments]);
      setFormData({ name: '', text: '', rating: 0 });
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star-icon ${i < rating ? 'filled' : ''}`} style={{ fontSize: '1rem' }}>★</span>
    ));
  };

  return (
    <section className="comments-section">
      <div className="comments-container">
        
        <div className="comments-header">
          <h2 className="comments-title">Opiniones de nuestros viajeros</h2>
          <p className="comments-subtitle">Transparencia total: así vivieron Japón con nosotros</p>
        </div>

        {/* CONTENEDOR CON SCROLL */}
        <div className="comments-scroll-wrapper">
          <div className="comments-list">
            {comments.map((comment) => (
              <div className="comment-card" key={comment.id}>
                <div className="comment-header">
                  <div className="avatar-circle">
                    {comment.name.charAt(0)}
                  </div>
                  <div className="user-info">
                    <h4>{comment.name}</h4>
                    <p className="comment-date">{comment.date}</p>
                  </div>
                </div>
                <div className="stars">
                  {renderStars(comment.rating)}
                </div>
                <p className="comment-text">"{comment.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="form-wrapper">
          <h3 className="form-title">Comparte tu experiencia</h3>
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Valoración</label>
                <div className="rating-input" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                      key={star}
                      className={`star-icon ${star <= (hoverRating || formData.rating) ? 'filled' : ''}`}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Comentario</label>
              <textarea 
                name="text" 
                className="form-textarea" 
                placeholder="Cuéntanos qué tal fue tu viaje..."
                value={formData.text}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Comentario</button>
          </form>
        </div>

      </div>
    </section>
  );
};


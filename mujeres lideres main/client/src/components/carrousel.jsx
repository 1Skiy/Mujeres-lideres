import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3; // Actualiza este número según el total de noticias

    const showSlide = (index) => {
        if (index >= totalSlides) {
            setCurrentSlide(0);
        } else if (index < 0) {
            setCurrentSlide(totalSlides - 1);
        } else {
            setCurrentSlide(index);
        }
    };

    const changeSlide = (direction) => {
        showSlide(currentSlide + direction);
    };

    useEffect(() => {
        const autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 8000);

        return () => clearInterval(autoSlideInterval);
    }, [currentSlide]);

    return (
        <section id="seccion-noticias" className="contenedor-noticias">
            <div className="contenedor">
                <h2 className="titulo">Noticias Destacadas</h2>
                <div className="carrusel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="noticia">
                        <img src="./noticia 1.jpg" alt="" className="imagen-noticia" />
                        <div className="info-noticia">
                            <h3>Mujeres Emprendedoras Transforman la Economía Local</h3>
                            <p>Un grupo de mujeres emprendedoras ha lanzado una cooperativa en el sector de la moda sostenible.</p>
                        </div>
                    </div>
                    <div className="noticia">
                        <img src="./noticia 2.jpeg" alt="" className="imagen-noticia" />
                        <div className="info-noticia">
                            <h3>Liderazgo Femenino en Tecnología: Rompiendo Barreras</h3>
                            <p>Más mujeres están liderando empresas tecnológicas de vanguardia.</p>
                        </div>
                    </div>
                    <div className="noticia">
                        <img src="./noticia 3.jpg" alt="" className="imagen-noticia" />
                        <div className="info-noticia">
                            <h3>Mujeres y Medioambiente: Protagonistas en la Lucha contra el Cambio Climático</h3>
                            <p>Líderes ambientales como Gabriela García están abanderando iniciativas de reforestación.</p>
                        </div>
                    </div>
                </div>
                
                {/* Botón para redirigir a la página de noticias */}
                <div className="boton-noticias">
                    <Link to="/">
                        <button>Ver todas las noticias</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Carousel;

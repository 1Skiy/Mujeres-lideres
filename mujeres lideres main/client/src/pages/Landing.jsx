import { useState } from 'react'
import React from 'react';
import NavbarL from '../components/navbarlanding';
import Carousel from '../components/carrousel';

const LandingP = () => {
  return (
    <>
      
      <header>
        {/* Cabecera e Introducción */}
        <div className="Navbar">
            <NavbarL />
        </div>

        {/* Sección de cabecera principal */}
        <section id="inicio" className="contenedor-header">
          <h1>Mujeres Líderes</h1>
          <h2>- Liderazgo con Propósito y Poder -</h2>
        </section>

        <div className="estilo-ola" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 450 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: 'none', fill: '#fff' }} />
          </svg>
        </div>
      </header>

      {/* Sección de Acerca de */}
      <section id="acerca-de" className="contenedor-acerca-de">
        <div className="contenedor">
          <h2 className="titulo">Acerca de Nosotras</h2>
          <div className="contenido-acerca-de">
            {/* Misión */}
            <div className="contenido-individual-acerca-de">
              <div className="imagen-container">
                <img src="./mision.png" alt="Imagen de Misión" />
                <div className="texto-container">
                  <h3>Misión</h3>
                  <p>
                    Empoderar a mujeres independientes brindándoles herramientas, recursos y una plataforma de apoyo que promueva su desarrollo personal, profesional y emocional.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="contenido-individual-acerca-de">
              <div className="imagen-container">
                <img src="./vision.jpg" alt="Imagen de Visión" />
                <div className="texto-container">
                  <h3>Visión</h3>
                  <p>
                    Ser la plataforma líder que impulsa el crecimiento y la visibilidad de mujeres independientes en todo el mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Mujeres */}
      <section id="mujeres" className="contenedor-mujeres">
        <div className="contenedor">
          <h2 className="titulo">Voces de mujeres independientes</h2>
          <div className="cartas-mujeres">
            <div className="carta-individual">
              <img src="./mujer lider 1.jpg" alt="Foto de María" />
              <div className="contenido-texto-carta">
                <h4>María</h4>
                <p>El verdadero liderazgo no es solo para uno mismo, es para inspirar y empoderar a los demás.</p>
              </div>
            </div>
            <div className="carta-individual">
              <img src="./mujer lider 2.jpg" alt="Foto de Luisa" />
              <div className="contenido-texto-carta">
                <h4>Luisa</h4>
                <p>Las grandes mujeres no solo cambian su destino, sino también el de las que vienen detrás de ellas.</p>
              </div>
            </div>
            <div className="carta-individual">
              <img src="./mujer lider 3.webp" alt="Foto de Katrina" />
              <div className="contenido-texto-carta">
                <h4>Katrina</h4>
                <p>El poder está en nuestra capacidad de ser resilientes y marcar la diferencia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


          <div className="Noticias-carousel">
            <Carousel />
        </div>
     

      {/* Sección de Contacto */}
      <section id="contacto" className="formulario">
        <div className="contenedor-formulario">
          <div className="registro-invitacion">
            <h2>¡Regístrate Ahora!</h2>
            <p>Completa el formulario y forma parte de la nuestra comunidad.</p>
          </div>
          <div className="formulario-datos">
            <h2>Formulario de datos</h2>
            <form action="database.php" method="post">
              <label htmlFor="nombre">Nombre Completo:</label>
              <input type="text" name="nombre" id="nombre" required />
              <label htmlFor="correo">Correo Electrónico:</label>
              <input type="email" name="correo" id="correo" required />
              <label htmlFor="ciudad">Ciudad:</label>
              <input type="text" name="ciudad" id="ciudad" required />
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" name="telefono" id="telefono" required />
              <label htmlFor="comentarios">Comentarios:</label>
              <textarea name="comentarios" id="comentarios" rows="4"></textarea>
              <div className="botones">
                <button type="submit" name="enviar">Enviar Datos</button>
                <button type="reset">Borrar Datos</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="contenedor-footer">
          <div className="contenido-footer">
            <h4>TELÉFONO</h4>
            <p>+58 123 456 789</p>
          </div>
          <div className="contenido-footer">
            <h4>EMAIL</h4>
            <p>mujereslideres@gmail.com</p>
          </div>
          <div className="contenido-footer">
            <h4>LOCALIZACIÓN</h4>
            <p>Universidad St, Ciudad Ficticia</p>
          </div>
        </div>
        <h2 className="contacto">Contáctanos</h2>
        <div className="redes-sociales">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>
    </>
  );
};



export default LandingP
import React from 'react';

const SmoothScrollLink = ({ href, children }) => {
    const handleClick = (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto
        const targetId = href.substring(1); // Obtener el id del destino (sin el '#')
        const targetElement = document.getElementById(targetId); // Obtener la sección correspondiente

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
};

export default SmoothScrollLink;
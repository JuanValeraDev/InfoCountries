import React from 'react';

export const Fondo = ({ imagen }) => {
    const estilo = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FDF6EA',
        opacity: 0.8,
        backgroundImage: `url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return <div style={estilo}></div>;
};


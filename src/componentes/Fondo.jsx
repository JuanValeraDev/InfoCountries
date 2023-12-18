import React from 'react';

export const Fondo = ({imagen, children}) => {
    return <div className={"fondo_color_liso"}>
        <img src={imagen} className={"imagen_fondo"}/>

        {children}

    </div>;
};


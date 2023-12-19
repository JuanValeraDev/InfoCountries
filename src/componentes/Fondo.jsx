import React from 'react';

export const Fondo = ({imagen, shapes, children}) => {
    return <div className={"fondo_color_liso"}>
        <img src={imagen} className={"imagen_fondo"}/>
        <img src={shapes.shape_1} className={"fondo_shape_1"}/>
        <img src={shapes.shape_2} className={"fondo_shape_2"}/>

        {children}

    </div>;
};


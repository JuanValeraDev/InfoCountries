import React from 'react';

export const Fondo = ({imagen, shapes, class_imagen_fondo, class_shape_1, class_shape_2, children}) => {
    return <div className={"fondo_color_liso"}>
        <img src={imagen} className={class_imagen_fondo}/>
        <img src={shapes.shape_1} className={class_shape_1}/>
        <img src={shapes.shape_2} className={class_shape_2}/>
        {children}
    </div>;
};


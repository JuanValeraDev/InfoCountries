import React from "react"

export const Rectangulo = ({children, classNames, size, backgroundColor, borderColor, textColor}) => {
    const divStyle = {
        className:classNames,
        width: size.width,
        height: size.height,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",



    }
    return <div style={divStyle} className={`rectangulo ${classNames}`}>{children}</div>
}


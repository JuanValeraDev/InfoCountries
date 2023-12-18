import React from "react"

export const Rectangulo = ({children, classNames, size, backgroundColor, borderColor, textColor}) => {
    const divStyle = {
        className:classNames,
        width: size.width,
        height: size.height,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
        position:"absolute",
    }
    return <div style={divStyle} className={`rectangulo ${classNames}`}>{children}</div>
}


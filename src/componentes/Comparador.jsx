import { Rectangulo } from "./Rectangulo"
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { countries, theme } from '../utils/countries.js'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testText } from "../utils/temp.js";


export const Comparador = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [result, setResult] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    const compare = () => {
        setResult(testText)
    }


    return <div className={"fondo fondo_comparador"}>
        <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
                <h1 className={"titulo_comparador mt-5"}>Comparador de países</h1>
                <Col xs={7} md={5} xl={3}>
                    <Select className="mt-5 buscador-galeria text-start buscadores"
                        value={selectedOptions}
                        onChange={(o) => setSelectedOptions(o)}
                        isOptionDisabled={() => selectedOptions.length >= 3}
                        isMulti options={countries}
                        isClearable
                        isSearchable
                        placeholder={"Paises a comparar (Máximo 3 países)"} />
                    <Select className="mt-3 buscador-galeria text-start buscadores" options={theme} isClearable isSearchable placeholder={"temática a comparar"} />
                    <button onClick={compare} className="my-3 boton_comparar">Comparar</button>
                </Col>


            </div>
            <div className="d-flex flex-column align-items-center">
                <Col xs={12} sm={10} lg={5} xxl={5}>
                    {result.length > 0 && (<Slider {...settings}>

                        {result.map((text, index) => (
                            <Rectangulo classNames={"my-5"}
                                backgroundColor={"#113946"}
                                borderColor={"#FDF6EA"}
                                textColor={"#FDF6EA"}
                                height={{ height: "min-content" }}
                                width={{ width: "auto" }}>
                                <p className="p-2 p-sm-4 text-center">{text}</p>
                            </Rectangulo>
                        ))}
                    </Slider>)}
                    {/* <Rectangulo classNames={"my-5"}
                            backgroundColor={"#113946"}
                            borderColor={"#FDF6EA"}
                            textColor={"#FDF6EA"}
                            height={{ height: "min-content" }}
                            width={{ width: "auto" }}>
                            <p className="p-2 p-sm-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae
                                obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam
                                provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                                Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse ve
                            </p>
                        </Rectangulo>
                        <Rectangulo classNames={"my-5"}
                            backgroundColor={"#113946"}
                            borderColor={"#FDF6EA"}
                            textColor={"#FDF6EA"}
                            height={{ height: "min-content" }}
                            width={{ width: "auto" }}>
                            <p className="p-2 p-sm-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae
                                obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam
                                provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                                Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse ve
                            </p>
                        </Rectangulo> */}

                </Col>
            </div>
        </div>
    </div>
}



{/* <Col xs={12} sm={10} lg={5} xxl={5}>
                <Rectangulo classNames={"my-5"}
                            backgroundColor={"#113946"}
                            borderColor={"#FDF6EA"}
                            textColor={"#FDF6EA"}
                            height={{height: "min-content"}}
                            width={{width: "auto"}}>
                    <text className="p-2 p-sm-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae
                        obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam
                        provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                        Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse vel
                        dolore, autem, excepturi illum ea et dolorum mollitia. Rem adipisci ipsum aliquid amet, ea
                        sapiente
                        perferendis.
                        Asperiores, delectus ullam magni consequuntur quas ut hic necessitatibus rerum, alias facere,
                        odio
                        atque porro voluptates accusamus pariatur earum nobis dolores cumque voluptatem nostrum numquam
                        eveniet doloribus reprehenderit laboriosam. Culpa.
                    </text>
                </Rectangulo>
                </Col> */}

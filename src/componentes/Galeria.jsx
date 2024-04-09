import React from "react";
import { Rectangulo } from "./Rectangulo.jsx";
import { Col, Row, Modal } from "react-bootstrap";
import Select from "react-select";
import { countries } from '../utils/countries.js'
import { createClient } from 'pexels'
import { useEffect, useState } from "react";


export const Galeria = () => {


    const [selectedCountry, setSelectedCountry] = useState(null);
    const [images, setImages] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleModalClose = () => setShowModal(false);

    const handleImageClick = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const client = createClient(
        "s80PZl05y2VQ3IiHUeFEZMEOKvYGaHAngMtqVi0XGkl2zxw77tcHlYln"
    );

    useEffect(() => {
        const fetchImages = async () => {
            try {
                if (selectedCountry) {
                    const response = await client.photos.search({
                        query: selectedCountry.label,
                        per_page: 6,
                    });
                    setImages(response.photos);
                }
            } catch (error) {
                console.error("Error con las imágenes de pexel:", error);
            }
        };

        fetchImages();
    }, [selectedCountry]);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    return (
        <div className={"fondo fondo_galeria"}>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
                    <h1 className={"titulo_galeria mt-5"}>Observa con detalle</h1>
                    <Col xs={7} md={5} xl={3}>
                        <Select
                            className="mt-5 buscador-galeria text-start buscador_galeria"
                            options={countries}
                            isClearable
                            isSearchable
                            placeholder={"País a buscar"}
                            onChange={handleCountryChange}
                        />
                    </Col>
                </div>
                <div className={"d-flex flex-column flex-xl-row align-items-center justify-content-center justify-content-lg-around"}>
                    {images.map((image, index) => (
                        (index % 2 === 0) && (
                            <Col key={index} xs={9} md={7} lg={5} xl={3} className={"z-2 align-items-center p-3"}>
                                <Rectangulo
                                    classNames={"my-5 imagen_galeria"}
                                    backgroundColor={"#FFF2D8"}
                                    borderColor={"#113946"}
                                    textColor={"#113946"}
                                    height={{ height: "400px" }}
                                >
                                    <img className="imageGallery" src={images[index].src.large} onClick={() => handleImageClick(images[index])} />
                                </Rectangulo>
                                {images[index + 1] && (
                                    <Rectangulo
                                        classNames={"my-5 imagen_galeria"}
                                        backgroundColor={"#FFF2D8"}
                                        borderColor={"#113946"}
                                        textColor={"#113946"}
                                        height={{ height: "400px" }}
                                    >
                                        <img className="imageGallery" src={images[index + 1].src.large} onClick={() => handleImageClick(images[index + 1])} />
                                    </Rectangulo>
                                )}
                            </Col>
                        )
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={handleModalClose} centered size="xl">
                <Modal.Body className="modal_gallery">
                    {modalImage && (
                        <img src={modalImage.src.large2x} alt="" className="img-fluid imageModal" />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Galeria;

// return <div className={"fondo fondo_galeria"}>
//     <div className="d-flex flex-column">
//         <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
//             <h1 className={"titulo_galeria mt-5"}>Observa con detalle</h1>
//             <Col xs={7} md={5} xl={3}>
//                 <Select className="mt-5 buscador-galeria text-start buscadores" options={countries} isClearable isSearchable placeholder={"País a buscar"} onChange={{handleCountryChange}}/>
//                 {/* <input className="form-control mt-5 buscador-galeria" placeholder={"País a buscar"} type="text"/> */}
//             </Col>

//         </div>
//         <Row className={"d-flex align-items-center justify-content-center justify-content-lg-around"}>

//             <Col xs={9} md={7} lg={5} xl={3} className={"z-2 align-items-center p-3"}>
//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}
//                 >
//                     <img src={galeria_1} />
//                 </Rectangulo>
//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}>
//                     <img src={galeria_2} />
//                 </Rectangulo>
//             </Col>
//             <Col xs={9} md={7} lg={5} xl={3} className={"z-2 p-3"}>
//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}
//                 > <img src={galeria_3} />
//                 </Rectangulo>
//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}
//                 > <img src={galeria_4} />
//                 </Rectangulo>
//             </Col>
//             <Col xs={9} md={7} lg={5} xl={3} className={"z-2 p-3 d-lg-none d-xl-block"}>
//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}
//                 > <img src={galeria_5} />
//                 </Rectangulo>

//                 <Rectangulo
//                     classNames={"my-5 imagen_galeria"}
//                     backgroundColor={"#FFF2D8"}
//                     borderColor={"#113946"}
//                     textColor={"#113946"}
//                     height={{ height: "400px" }}
//                 > <img src={galeria_6} />
//                 </Rectangulo>
//             </Col>
//         </Row>
//     </div>
// </div>



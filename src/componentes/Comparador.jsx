import {Rectangulo} from "./Rectangulo"
import {Col} from "react-bootstrap";
import React from "react";

export const Comparador = () => {

    return <div className={"fondo fondo_comparador"}>

        <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
                <h1 className={"titulo_galeria mt-5"}>Comparador de países</h1>
                <Col xs={7} md={5} xl={3}>
                    <input className="form-control mt-5 buscador-galeria" placeholder={"País a comparar"} type="text"/>
                    <input className="form-control mt-3 buscador-galeria" placeholder={"País a comparar"} type="text"/>
                </Col>

            </div>
        <div className="d-flex flex-column flex-lg-row">
            <Rectangulo classNames={"my-5 mx-5"}
                        backgroundColor={"#113946"}
                        borderColor={"white"}
                        textColor={"white"}
                        height={{height: "min-content"}}
                        width={{width: "auto"}}>
                <text className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae
                    obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam
                    provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                    Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse vel
                    dolore, autem, excepturi illum ea et dolorum mollitia. Rem adipisci ipsum aliquid amet, ea sapiente
                    perferendis.
                    Asperiores, delectus ullam magni consequuntur quas ut hic necessitatibus rerum, alias facere, odio
                    atque porro voluptates accusamus pariatur earum nobis dolores cumque voluptatem nostrum numquam
                    eveniet doloribus reprehenderit laboriosam. Culpa.
                </text>
            </Rectangulo>
            <Rectangulo classNames={"my-5 mx-5"}
                        backgroundColor={"#113946"}
                        borderColor={"white"}
                        textColor={"white"}
                        height={{height: "min-content"}}
                        width={{width: "auto"}}>
                <text className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae
                    obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam
                    provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                    Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse vel
                    dolore, autem, excepturi illum ea et dolorum mollitia. Rem adipisci ipsum aliquid amet, ea sapiente
                    perferendis.
                    Asperiores, delectus ullam magni consequuntur quas ut hic necessitatibus rerum, alias facere, odio
                    atque porro voluptates accusamus pariatur earum nobis dolores cumque voluptatem nostrum numquam
                    eveniet doloribus reprehenderit laboriosam. Culpa.
                </text>
            </Rectangulo>
        </div>
        </div>
    </div>
}

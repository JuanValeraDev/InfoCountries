import { Rectangulo } from "./Rectangulo"

export const Comparador = () => {

    return <div className={"d-flex flex-column justify-content-center align-items-center comparador"}>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-around comparador_2">

            <h1 className="titulo_comparador my-5 mx-2">Comparador de países</h1>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <input className="form-control comparador_textfield mx-3 my-1" placeholder={"País a comparar"} type="text" />
                <input className="form-control comparador_textfield mx-3" placeholder={"País a comparar"} type="text" />
            </div>
        </div>
        <div className="d-flex flex-column flex-lg-row">
            <Rectangulo classNames={"my-5 mx-5"}
                        backgroundColor={"#113946"}
                        borderColor={"white"}
                        textColor={"white"}
                        height={{height: "min-content"}}
                        width={{width: "auto"}}>
                            <text className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                            Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse vel dolore, autem, excepturi illum ea et dolorum mollitia. Rem adipisci ipsum aliquid amet, ea sapiente perferendis.
                            Asperiores, delectus ullam magni consequuntur quas ut hic necessitatibus rerum, alias facere, odio atque porro voluptates accusamus pariatur earum nobis dolores cumque voluptatem nostrum numquam eveniet doloribus reprehenderit laboriosam. Culpa.
                            </text>
            </Rectangulo>
            <Rectangulo classNames={"my-5 mx-5"}
                        backgroundColor={"#113946"}
                        borderColor={"white"}
                        textColor={"white"}
                        height={{height: "min-content"}}
                        width={{width: "auto"}}>
                            <text className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint esse beatae obcaecati voluptate impedit fuga, cupiditate est animi temporibus molestias architecto totam provident atque optio nesciunt doloribus reprehenderit quis eligendi?
                            Voluptate sequi illum facilis quod ratione atque velit. Doloremque quo quam explicabo esse vel dolore, autem, excepturi illum ea et dolorum mollitia. Rem adipisci ipsum aliquid amet, ea sapiente perferendis.
                            Asperiores, delectus ullam magni consequuntur quas ut hic necessitatibus rerum, alias facere, odio atque porro voluptates accusamus pariatur earum nobis dolores cumque voluptatem nostrum numquam eveniet doloribus reprehenderit laboriosam. Culpa.
                            </text>
            </Rectangulo>
        </div>

    </div>
}
import {DescriptionWrapper,Details} from "./style"

export function Description({image, qtd,name,price,onClick,...rest}){
return(
    <DescriptionWrapper {...rest}>
        <img src={image} alt="Imagem do prato selecionado" />
        <Details>
            <div>
                <h1>{qtd} x {name}</h1>
                <h3>{price}</h3>
            </div>
            <button onClick={onClick}>Excluir</button>
        </Details>
     
    </DescriptionWrapper>
)

}
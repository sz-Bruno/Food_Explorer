import {IngredientsWrapper} from './style'

export function Ingredients({image,ingredient}){
    return(
        <IngredientsWrapper>
            <img src={image} alt="ingrediente" />
            <p>{ingredient}</p>
        </IngredientsWrapper>
    )
}
import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import {DishWrapper,AddArea,DishDetails} from "./style"
import { ButtonInclude } from "../ButtonInclude"


export function Dish({image, name, description,price,...rest}){

    return(
        <DishWrapper {...rest}>
         <img src={image} alt="Foto do prato" />
         <DishDetails><h1>{name} &gt;</h1></DishDetails>
         <p>{description}</p>
         <h2>{price}</h2>
           <AddArea>
           <div>
               <button><img src={Less}  /></button>
               <h3>01</h3>
               <button><img src={Plus}  /></button>
            </div>
            <ButtonInclude title="incluir" />
           </AddArea>
         
        </DishWrapper>
    )
}
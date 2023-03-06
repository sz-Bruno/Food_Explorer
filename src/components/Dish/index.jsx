import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import {DishWrapper,AddArea,DishDetails} from "./style"
import { ButtonInclude } from "../ButtonInclude"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"

export function Dish({image, name, description,price,onClick,qtd,onClicked,...rest}){

     const {HandleDetails,HandleAddDishs,count,setcount,selectedDishs,setSelectedDishs,HandleClickSum}= useContext(AuthContext)
    
    
  

    
  
   
   
    return(
        <DishWrapper  {...rest}>
         <img src={image} alt="Foto do prato" />
         <DishDetails onClick={()=>HandleDetails(name,description,image,price)} to='/details'>
         <h1>{name} &gt;</h1></DishDetails>
         <p>{description}</p>
         <h2>{price}</h2>
           <AddArea>
           <div>
               <button onClick={()=>{}}><img src={Less}  /></button>
               <h3>{qtd>9? qtd :`0${qtd}`}</h3>
               <button onClick={onClicked}><img src={Plus}  /></button>
            </div>
            <ButtonInclude onClick={()=>{HandleAddDishs(name,description,image,price,qtd)}}title="incluir" />
           </AddArea>
         
        </DishWrapper>
    )
}
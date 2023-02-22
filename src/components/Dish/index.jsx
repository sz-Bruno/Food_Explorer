import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import {DishWrapper,AddArea,DishDetails} from "./style"
import { ButtonInclude } from "../ButtonInclude"
import { useState } from "react"



export function Dish({image, name, description,price,...rest}){

    const [count,setcount]= useState(0)
    
  

    const HandleAdd=()=>{
        setcount(count+1)
       
    }
    const HandleRemove=()=>{
        setcount(count-1)
        if(count<1){
            setcount(0)
        }
    }
    const HandleInclude=()=>{
        alert(`${name} incluído no carrinho `)
    }
    return(
        <DishWrapper  {...rest}>
         <img src={image} alt="Foto do prato" />
         <DishDetails to='/details'><h1>{name} &gt;</h1></DishDetails>
         <p>{description}</p>
         <h2>{price}</h2>
           <AddArea>
           <div>
               <button onClick={HandleRemove}><img src={Less}  /></button>
               <h3>{count>9? count :`0${count}`}</h3>
               <button onClick={HandleAdd}><img src={Plus}  /></button>
            </div>
            <ButtonInclude onClick={HandleInclude}title="incluir" />
           </AddArea>
         
        </DishWrapper>
    )
}
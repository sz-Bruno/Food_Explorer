
import {DetailsWrapper,Content,Description,Ingredients_List,Add_Price_Area} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Buttonback } from "../../components/ButtonBack"
import { Ingredients } from "../../components/Ingredients"
import Ravanello from "../../assets/images/ravanello.png"
import Alface from "../../assets/images/alface.png"
import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import { ButtonInclude } from "../../components/ButtonInclude"
import { useState } from "react"
import { useContext } from "react"
import {AuthContext} from "../.././hooks/Auth"

export function DishDetails(){

    const {dish,HandleAddDishs,setSelectedDishs} = useContext(AuthContext)
    const [count, setcount]= useState(0)
    
    const HandleAdd=()=>{
        setcount(count+1)
    }
    const HandleRemove=()=>{
        setcount(count-1)
        if(count<1){
            setcount(0)
        }
    }
    
    
         const HandleCart=()=>{
            console.log(dish)
         }
    return(
        <DetailsWrapper>
            <Header onClick={HandleCart}/>
            <Content>
                <Buttonback />
                <div>
                   <img src={dish.image} alt={dish.name} />
                  <Description>
                     <h1>{dish.name}</h1>
                     <h2>{dish.description}</h2>
                     
                     <Add_Price_Area>
                      <h2>R$ {dish.price}</h2>
                      <div>
                        <button onClick={HandleRemove}>
                            <img src={Less}/>
                        </button>
                        <h3>{dish.qtd<10? `0${dish.qtd}`: dish.qtd}</h3>
                        <button onClick={HandleAdd}>
                            <img src={Plus}/>
                        </button>
                      </div>
                      <ButtonInclude onClick={()=>setSelectedDishs(prev=>[...prev,dish])}title='incluir'/>
                     </Add_Price_Area>
                  </Description>
                  
                </div>
               
            </Content>
            <Footer/>
        </DetailsWrapper>
    )
}
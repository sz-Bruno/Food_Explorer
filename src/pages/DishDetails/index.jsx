
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

    const {dish,count,setcount,HandleAddDishs,setSelectedDishs,HandleClickAddQtd} = useContext(AuthContext)
    
    
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
        <DetailsWrapper >
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
                        <h3>{count<10? `0${count}`: count}</h3>
                        <button onClick={()=>HandleClickAddQtd(dish.id,dish.name,dish.price,dish.image)}>
                            <img src={Plus}/>
                        </button>
                      </div>
                      <ButtonInclude onClick={()=>HandleAddDishs(dish.name,count)}title='incluir'/>
                     </Add_Price_Area>
                  </Description>
                  
                </div>
               
            </Content>
            <Footer/>
        </DetailsWrapper>
    )
}
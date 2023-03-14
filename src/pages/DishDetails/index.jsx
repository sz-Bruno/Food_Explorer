
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

    const {dish,count,setcount,HandleAddDishs,setSelectedDishs,HandleClickAddQtd,HandleClickAddDetails,HandleReduce} = useContext(AuthContext)
    
    console.log(dish)
  
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
               {
                dish.map((item,id)=>(
                    <div key={id}>
                    <img src={item.image} alt={item.name} />
                   <Description>
                      <h1>{item.name}</h1>
                      <h2>{item.description}</h2>
                      
                      <Add_Price_Area>
                       <h2>R$ {item.price}</h2>
                       <div>
                         <button onClick={()=>HandleReduce(item.name,item.qtd,dish)}>
                             <img src={Less}/>
                         </button>
                         <h3>{item.qtd<10? `0${item.qtd}`: item.qtd}</h3>
                         <button onClick={()=>HandleClickAddDetails(item.id,item.name,item.price,item.image,item.qtd,dish)}>
                             <img src={Plus}/>
                         </button>
                       </div>
                       <ButtonInclude onClick={()=>HandleAddDishs(dish.name,dish.qtd)}title='incluir'/>
                      </Add_Price_Area>
                   </Description>
                   
                 </div>
                ))
               }
               
            </Content>
            <Footer/>
        </DetailsWrapper>
    )
}
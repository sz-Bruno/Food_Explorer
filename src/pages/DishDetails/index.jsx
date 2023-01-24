
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


export function DishDetails(){
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
    const HandleInclude=()=>{
        alert(`${Dish.name} incluído no carrinho `)
    }
    const Dish=
        {
            name:'Salada Ravanello',
            image: Ravanello,
            description:'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
            price:'25,98',
            ingredients: [
                {
                    name:'Alface',
                    image:Alface
                },
                {
                    name:'Alface',
                    image:Alface
                },
                {
                    name:'Alface',
                    image:Alface
                },
                
            ]
        }
         const HandleCart=()=>{
            console.log(Dish)
         }
    return(
        <DetailsWrapper>
            <Header onClick={HandleCart}/>
            <Content>
                <Buttonback/>
                <div>
                   <img src={Ravanello} alt="Imagem da salada ravanello" />
                  <Description>
                     <h1>{Dish.name}</h1>
                     <h2>{Dish.description}</h2>
                     <Ingredients_List>
                         {Dish.ingredients.map((item,id)=>
                            <Ingredients key={id}  ingredient={item.name} image={item.image}/>
                         )}
                     </Ingredients_List>

                     <Add_Price_Area>
                      <h2>R$ {Dish.price}</h2>
                      <div>
                        <button onClick={HandleRemove}>
                            <img src={Less}/>
                        </button>
                        <h3>{count<10? `0${count}`: count}</h3>
                        <button onClick={HandleAdd}>
                            <img src={Plus}/>
                        </button>
                      </div>
                      <ButtonInclude onClick={HandleInclude}title='incluir'/>
                     </Add_Price_Area>
                  </Description>
                  
                </div>
               
            </Content>
            <Footer/>
        </DetailsWrapper>
    )
}
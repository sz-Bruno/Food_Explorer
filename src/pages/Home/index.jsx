
import {TesteWrapper,MainContent} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Options } from "../../components/Options"
import { Dish } from "../../components/Dish"
import Ravanello from "../../assets/images/ravanello.png"
import { api } from "../../services/api"
import Candies from "../../assets/images/candies.svg"
import { useState } from "react"
import { useEffect } from "react"

import { useAuth } from "../../hooks/Auth"
export function Home(){
   const [data, setData]= useState([])
   const Url="http://localhost:3000/files/"

  useEffect(()=>{
   async function LoadDish(){
      const response= await api.get('/principals')
      setData(response.data)
      
   }
  
   LoadDish()
  
  },[])
 
  const context= useAuth()
   console.log('CONTEXTO USADO=>',context)
  
     return(
         <TesteWrapper>
              <Header/>
             
             <MainContent>
                  <img src={Candies} alt="" />
                  <div>
                       <h1>SABORES INIGUALÁVEIS</h1>
                       <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                  </div>
                    <Section title="Pratos principais">
                       <Options>
                       {
                          data.map((dish,id)=>(
                           <Dish 
                           key={id}
                           image={ `${Url}${dish.avatar}`}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                        />
                          ))
                       }
                           

                            
                       </Options>
                    </Section>

                    <Section title="Bebidas">
                       <Options>
                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce            
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                             />
                       </Options>
                    </Section>

                    <Section title="Sobremesas">
                       <Options>
                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce            
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                            />

                            <Dish 
                               image={Ravanello} 
                               name="Salada Ravanello"
                               description="Rabanetes, 
                               folhas verdes e molho agridoce 
                               salpicados com gergelim"
                               price="R$ 49,97"
                             />
                       </Options>
                    </Section>
                </MainContent>
              <Footer/>
         </TesteWrapper>
       )
}
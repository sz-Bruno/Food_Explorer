
import {TesteWrapper,MainContent} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Options } from "../../components/Options"
import { Dish } from "../../components/Dish"
import Ravanello from "../../assets/images/ravanello.png"

import Candies from "../../assets/images/candies.svg"

export function Home(){
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
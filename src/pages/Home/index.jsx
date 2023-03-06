
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
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"
import ButtonBack from "../../assets/images/back_button.svg"
import ButtonGo from "../../assets/images/go_button.svg"
import { useRef } from "react"

export function Home(){
  const {count,HandleClickAddQtd}= useContext(AuthContext)
   
  
   const carousel= useRef(null)
   const carousel2= useRef(null)
   const carousel3= useRef(null)
   const [principals, setPrincipals]= useState([])
   const [drinks, setDrinks]= useState([])
   const [desserts, setDesserts]= useState([])
   
   const Url="http://localhost:3000/files/"

   const Handleadd=(id,array)=>{
      const newchose= array.find(item=>(id===item.id))
      setChose(prev=>[...prev,newchose])
      
   }
   const HandleClickLeftPrincipal=(e)=>{
      e.preventDefault()
     
      carousel.current.scrollLeft-= carousel.current.offsetWidth
   }
   const HandleClickRightPrincipal=(e)=>{
      e.preventDefault()
      
      carousel.current.scrollLeft+= carousel.current.offsetWidth
   }
   const HandleClickLeftDrink=(e)=>{
      e.preventDefault()
     
      carousel2.current.scrollLeft-= carousel.current.offsetWidth
   }
   const HandleClickRightDrink=(e)=>{
      e.preventDefault()
      
      carousel2.current.scrollLeft+= carousel.current.offsetWidth
   }
   const HandleClickLeftDessert=(e)=>{
      e.preventDefault()
     
      carousel3.current.scrollLeft-= carousel.current.offsetWidth
   }
   const HandleClickRightDessert=(e)=>{
      e.preventDefault()
      
      carousel3.current.scrollLeft+= carousel.current.offsetWidth
   }
  

  useEffect(()=>{
   async function LoadDish(){
      const ResponsePrincipal= await api.get('/principals')
      const ResponseDrinks= await api.get('/drinks')
      const ResponseDessert= await api.get('/desserts')
      setPrincipals(ResponsePrincipal.data)
      setDrinks(ResponseDrinks.data)
      setDesserts(ResponseDessert.data)
      
   }
   
  
   LoadDish()
  
  },[])

  


   
     return(
         <TesteWrapper>
              <Header/>
             
             <MainContent>
                  <img src={Candies} alt="Imagem de doces" />
                  <div>
                       <h1>SABORES INIGUALÁVEIS</h1>
                       <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                  </div>
                    <Section title="Pratos principais">
                       <div className="carousel" ref={carousel}>
                        <button onClick={HandleClickLeftPrincipal} className="left"><img src={ButtonBack} alt="voltar" /></button>
                       
                       
                       {
                          principals.map((dish,id)=>(
                           <Dish 
                           key={id}
                           image={`${Url}${dish.avatar}` }
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           qtd={count}
                           onClicked={()=>HandleClickAddQtd(id,dish.name,dish.price,`${Url}${dish.avatar}`)}
                           
                        />
                          ))
                       }
                       
                            <button onClick={HandleClickRightPrincipal} className="right"><img src={ButtonGo} alt="avançar"/></button>
                       </div>

                    </Section>

                    <Section title="Bebidas">
                    <div className="carousel" ref={carousel2}>
                        <button onClick={HandleClickLeftDrink} className="left"><img src={ButtonBack} alt="voltar" /></button>
                       
                       
                        {
                          drinks.map((dish,id)=>(
                           <Dish 
                           key={id}
                           image={ `${Url}${dish.avatar}`}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           onClick={()=> Handleadd(dish.name,drinks)}
                        />
                          ))
                       }
                       
                            <button onClick={HandleClickRightDrink} className="right"><img src={ButtonGo} alt="avançar"/></button>
                       </div>
                       
                    </Section>

                    <Section title="Sobremesas">
                    <div className="carousel" ref={carousel3}>
                        <button onClick={HandleClickLeftDessert} className="left"><img src={ButtonBack} alt="voltar" /></button>
                       
                       
                        {
                          desserts.map((dish,id)=>(
                           <Dish 
                           key={id}
                           image={ `${Url}${dish.avatar}`}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           onClick={()=> Handleadd(dish.name,desserts)}
                        />
                          ))
                       }
                       
                            <button onClick={HandleClickRightDessert} className="right"><img src={ButtonGo} alt="avançar"/></button>
                       </div>
                       
                    </Section>
                </MainContent>
              <Footer/>
         </TesteWrapper>
       )
}
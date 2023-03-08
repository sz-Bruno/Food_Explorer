
import {TesteWrapper,MainContent,DishDetails} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Options } from "../../components/Options"
import { Dish } from "../../components/Dish"
import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
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
import { ButtonInclude } from "../../components/ButtonInclude"

export function Home(){
  const {count,HandleClickAddQtd,HandleAddDishs,HandleDetails,HandleReduce}= useContext(AuthContext)
  
  
   const carousel= useRef(null)
   const carousel2= useRef(null)
   const carousel3= useRef(null)
   const [principals, setPrincipals]= useState([])
   const [drinks, setDrinks]= useState([])
   const [desserts, setDesserts]= useState([])
   
   const Url="http://localhost:3000/files/"

  
   
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
                           
                           <div className="Dish_Wrapper" key={id}>
                              
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(id,dish.name,dish.description,`${Url}${dish.avatar}`,dish.price)} to ='/details'>
                               <h1>{dish.name}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.name,count)}><img src={Less}  /></button>
                                    <h3>{count>9?count:`0${count}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(id,dish.name,dish.price,`${Url}${dish.avatar}`)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.name,count)} title='incluir'/>
                               </div>

                           </div>
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
                           
                           <div className="Dish_Wrapper" key={id}>
                              
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(id,dish.name,dish.description,`${Url}${dish.avatar}`,dish.price)} to ='/details'>
                               <h1>{dish.name}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.name,count)}><img src={Less}  /></button>
                                    <h3>{count>9?count:`0${count}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(id,dish.name,dish.price,`${Url}${dish.avatar}`)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.name,count)} title='incluir'/>
                               </div>

                           </div>
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
                           
                           <div className="Dish_Wrapper" key={id}>
                              
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(id,dish.name,dish.description,`${Url}${dish.avatar}`,dish.price)} to ='/details'>
                               <h1>{dish.name}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.name,count)}><img src={Less}  /></button>
                                    <h3>{count>9?count:`0${count}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(id,dish.name,dish.price,`${Url}${dish.avatar}`)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.name,count)} title='incluir'/>
                               </div>

                           </div>
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
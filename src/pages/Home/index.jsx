
import {TesteWrapper,MainContent,DishDetails} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Options } from "../../components/Options"
import { Dish } from "../../components/Dish"
import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import Ravanello from "../../assets/images/ravanello.png"
import {FiPlus} from 'react-icons/fi'
import {FiEdit} from 'react-icons/fi'
import {FiXSquare,FiSearch} from 'react-icons/fi'
import { api } from "../../services/api"
import Candies from "../../assets/images/candies.svg"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../hooks/Auth"
import ButtonBack from "../../assets/images/back_button.svg"
import ButtonGo from "../../assets/images/go_button.svg"
import { useRef } from "react"
import { ButtonInclude } from "../../components/ButtonInclude"
import { InputHeader } from "../../components/InputHeader"
export function Home(){
  const {count,isadmin,ingredients,setIngredients,HandleClickAddQtd,HandleAddDishs,HandleDetails,HandleReduce,setDish_id,setArray_dish}= useContext(AuthContext)
 
  const navigate= useNavigate()
   const carousel= useRef(null)
   const carousel2= useRef(null)
   const carousel3= useRef(null)
   const [name,setName]= useState('')
   const [description,setDescription]= useState('')
   const [price,setPrice]= useState('')
   const [principals, setPrincipals]= useState([])
   const [drinks, setDrinks]= useState([])
   const [desserts, setDesserts]= useState([])
   const [data, setData]= useState([])
   const [dishes, setDishes]= useState([])
   const [find,setfind]= useState('')
   const Url="http://localhost:3000/files/"

   const HandleCreate=()=>{
     navigate("/create")
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
  

   
   async function LoadDish(){
       const array_dish=await api.get(`/dishes?title=${find}`)
    
      setDishes(array_dish.data.map(item=>item.dish))
      setIngredients(array_dish.data.map(item=>item.ingredients))
      
   
   }
   
   const HandleDeleteDish=(id)=>{
      const confirmation= confirm('Deseja excluir o prato do cardápio?')
      if(confirmation){
         api.delete(`/dishes/${id}`)
         alert('Prato deletado do cardápio')
         LoadDish()
      }else{
         return
      }
      
   }
   const HandleEditDish=(id)=>{
      
      setDish_id(id)
      navigate('/edit')

   }

  useEffect(()=>{
   
   LoadDish()
  
  },[find])

  


   
     return(
         <TesteWrapper>
              <Header><InputHeader onChange={(e)=>setfind(e.target.value)} icon={FiSearch} placeholder="Busque pelas opções de pratos"/></Header>
             
             <MainContent>
                  <img src={Candies} alt="Imagem de doces" />
                  <div>
                       <h1>SABORES INIGUALÁVEIS</h1>
                       <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                       
                  </div>
                  {isadmin&&
                     <button onClick={HandleCreate} className="add_dish">Criar prato <FiPlus size={20}/></button >}
                    <Section title="Pratos principais">

                    

                       <div className="carousel" ref={carousel}>
                        <button onClick={HandleClickLeftPrincipal} className="left"><img src={ButtonBack} alt="voltar" /></button>
                       
                       
                       {
                          dishes.filter(dish=>dish.category==='principals').map((dish,id)=>(
                           
                           <div className="Dish_Wrapper" key={id}>
                              {isadmin&&
                                  <div className="button_admin">
                                  <button onClick={()=>HandleEditDish(dish.id)} className="edit"><FiEdit/></button>
                                  <button onClick={()=>HandleDeleteDish(dish.id)} className="delete"><FiXSquare/></button></div>
                                 }
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(dish.id)} to ='/details'>
                               <h1>{dish.title}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.title,dish.qtd,dishes)}><img src={Less}  /></button>
                                    <h3 >{dish.qtd>9?dish.qtd:`0${dish.qtd}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(dish.id,dish.title,dish.price,`${Url}${dish.avatar}`,dish.qtd,dishes)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.title,dish.qtd)} title='incluir'/>
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
                          dishes.filter(dish=>dish.category==='drinks').map((dish,id)=>(
                           
                           <div className="Dish_Wrapper" key={id}>
                              {isadmin&&
                                  <div className="button_admin">
                                  <button onClick={()=>HandleEditDish(dish.id,'drinks')} className="edit"><FiEdit/></button>
                                  <button onClick={()=>HandleDeleteDish(dish.id)} className="delete"><FiXSquare/></button></div>
                                 }
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(dish.id)} to ='/details'>
                               <h1>{dish.title}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.title,dish.qtd,dishes)}><img src={Less}  /></button>
                                    <h3>{dish.qtd>9?dish.qtd:`0${dish.qtd}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(dish.id,dish.title,dish.price,`${Url}${dish.avatar}`,dish.qtd,dishes)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.title,dish.qtd)} title='incluir'/>
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
                          dishes.filter(dish=>dish.category==='desserts').map((dish,id)=>(
                           
                           <div className="Dish_Wrapper" key={id}>
                              {isadmin&&
                                  <div className="button_admin">
                                  <button onClick={()=>HandleEditDish(dish.id,'desserts')} className="edit"><FiEdit/></button>
                                  <button onClick={()=>HandleDeleteDish(dish.id)} className="delete"><FiXSquare/></button></div>
                                 }
                              <img src={`${Url}${dish.avatar}`} alt="Foto do prato" />
                              <DishDetails onClick={()=>HandleDetails(dish.id)} to ='/details'>
                               <h1>{dish.title}&gt;</h1>
                              </DishDetails>
                              <p>{dish.description}</p>
                              <h2>R$ {dish.price}</h2>
                               <div className="Add_Area">
                                 <div>
                                    <button onClick={()=>HandleReduce(dish.title,dish.qtd,dishes)}><img src={Less}  /></button>
                                    <h3>{dish.qtd>9?dish.qtd:`0${dish.qtd}`}</h3>
                                    <button onClick={()=>HandleClickAddQtd(dish.id,dish.title,dish.price,`${Url}${dish.avatar}`,dish.qtd,dishes)}><img src={Plus}  /></button>
                                 </div>
                                 <ButtonInclude onClick={()=>HandleAddDishs(dish.title,dish.qtd)} title='incluir'/>
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
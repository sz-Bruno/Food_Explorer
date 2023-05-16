
import {DetailsWrapper,Content,Description,Add_Price_Area} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Buttonback } from "../../components/ButtonBack"
import Less from "../../assets/images/lessIcon.svg"
import Plus from "../../assets/images/plusIcon.svg"
import { ButtonInclude } from "../../components/ButtonInclude"
import { useContext } from "react"
import {AuthContext} from "../.././hooks/Auth"
import { useNavigate } from "react-router-dom"

export function DishDetails(){
    const navigate=useNavigate()
    const {dish,ingredients,HandleClickAddDetails,HandleReduce} = useContext(AuthContext)
    console.log(dish,ingredients)

    const HandleAdd=(name,qtd)=>{
        if(qtd===0){
            alert('Selecione a quantidade de itens')
            return
        }
       
        alert(`${name} incluído no carrinho!`)
        navigate('/')
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
                    <div key={id} className="details">
                      <img src={item.avatar} alt={item.title} />
                      <Description>
                          <h1>{item.title}</h1>
                          <h2>{item.description}</h2>
                            <div className="ingredients">
                                {
                                  ingredients.map((item,id)=>(
                                     <span key={id}>{item.name}</span>
                                  ))
                                }
                            </div>
                                  
                         <Add_Price_Area>
                             <h2>R$ {item.price}</h2>
                             <div className="add_price">
                                  <button onClick={()=>HandleReduce(item.title,item.qtd,dish)}>
                                      <img src={Less}/>
                                  </button>
                                  <h3>{item.qtd<10? `0${item.qtd}`: item.qtd}</h3>
                                  <button onClick={()=>HandleClickAddDetails(item.id,item.title,item.price,item.avatar,item.qtd,dish)}>
                                      <img src={Plus}/>
                                  </button>
                             </div>
                             <ButtonInclude onClick={()=>HandleAdd(item.title,item.qtd)}title='incluir'/>
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
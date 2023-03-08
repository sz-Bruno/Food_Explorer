import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import {OrderWrapper,Content} from "./style"
import { useState } from "react"
import { Table } from "../../components/Table"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"




export function OrderStatus(){
    const {selectedDishs}= useContext(AuthContext)
    const [Order,setOrder]= useState([ 
        {
        status:'Pendente',
        code:`0000000${Math.floor(Math.random()*1000)}`,
        description:selectedDishs,
        time:`${new Date().getDate()}/${new Date().getMonth()+1} às ${new Date().getHours()}h${new Date().getMinutes()}`
        }
    ])


console.log(selectedDishs)
   

    /*aqui acima vai o fetch na api, pega o fetch,joga no setOrder, e lá no tbody cria um tr com os dados do pedido(status,codigo,descrição,hora que foi feito) dando um data.map */
    return(
     <OrderWrapper>
        <Header/>
       <Content>
           <Section title='Pedidos'>
                  
                 <Table>
                 { 
                
                  Order.map((item,id)=>
                 
                      <tr key={id}>
                         <td >{item.status}</td>
                         <td>{item.code}</td>
                         <td>{selectedDishs.map((product,id)=>(
                            <p key={id}>{product.qtd}x {product.name}</p>
                         ))}</td>
                         <td>{item.time}</td>
                     </tr>
                 )
                  }
                  
                 </Table>
               
           </Section>
       </Content>
        <Footer/>
     </OrderWrapper>
     
    )
}
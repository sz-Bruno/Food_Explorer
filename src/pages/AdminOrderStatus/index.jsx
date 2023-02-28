import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import {OrderWrapper,Content} from "./style"
import { useState } from "react"
import { Table } from "../../components/Table"



export function AdminOrderStatus(){
  
   
  
    const [Order, setOrder]= useState([{
        status: 'Pendente',
        code:'000000020',
        description:'1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá',
        time:'20/05 às 18h00'
    },
    {
        status:'Pendente', 
        code:'000000021',
        description:'3 x Salada Radish, 1 x Chá de Canela, 1 x Suco de Uva',
        time:'20/05 às 18h15'
    },
    
])
   
    /*aqui acima vai o fetch na api, pega o fetch,joga no setOrder, e lá no tbody cria um tr com os dados do pedido(status,codigo,descrição,hora que foi feito) dando um data.map */
    return(
     <OrderWrapper>
        <Header/>
       <Content>
           <Section title='Pedidos'>
                  
                 <Table>
                 
                  { 
                
                Order.map((item,id)=>
               
                    <tr key={id} >
                       <td >
                        <select
                          onChange={(e)=>{
                          Order[id].status=e.target.value
                               
                            
                                console.log(Order)     
                    }}  
                            name="status_option" id="status_option">

                            <option value="Pendente"> Pendente</option>
                            <option value="Preparando">Preparando</option>
                            <option value="Entregue">Entregue</option>

                          
                        </select>
                        </td>
                       <td>{item.code}</td>
                       <td>{item.description}</td>
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
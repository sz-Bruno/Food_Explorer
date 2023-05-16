import {PaymentWrapper,CashSection,PixArea,CardArea,WaitArea} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Payment } from "../../components/Payment"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Description } from "../../components/Description/indes"
import { ButtonPayment } from "../../components/ButtonPayment"
import QR from "../../assets/images/qrcode.svg"
import Clock from "../../assets/images/clock.svg"
import Approved from "../../assets/images/approved.svg"
import Delivered from "../../assets/images/delivered.svg"
import buttonHeader from "../../assets/images/button_header.svg"
import Pix from "../../assets/images/pix_image.svg"
import Credit from "../../assets/images/credit_card.svg"
import { useState,useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"

export function PaymentArea(){
  const {selectedDishs,setSelectedDishs,HandleDeleteDishs}= useContext(AuthContext)
  const [isPixVisible, setisPixVisible]= useState(false)
  const [isCardVisible, setisCardVisible]= useState(true)
  const [isClockVisible,setisClockVisible]= useState(false)
  const [isApprovedVisible,setisApprovedVisible]= useState(false)
  const [isDeliveredVisible,setisDeliveredVisible]= useState(false)
  const [isButtonPixDisabled,setisButtonPixDisabled]= useState(false)
  const [isButtonCardDisabled,setisButtonCardDisabled]= useState(false)
  const [isButtonPixActived,setisButtonPixActived]= useState(true)
  const [isButtonCardActived,setisButtonCardActived]= useState(false)
  const [total_price, settotal_price]= useState()
  
  
  function HandleCardOption(){
    setisPixVisible(false)
    setisCardVisible(true)
    setisClockVisible(false)
    setisApprovedVisible(false)
    setisDeliveredVisible(false)
    setisButtonPixActived(false)
    setisButtonCardActived(true)
    
  }
  function HandlePixOption(){
    setisPixVisible(true)
    setisCardVisible(false)
    setisClockVisible(false)
    setisApprovedVisible(false)
    setisDeliveredVisible(false)
    setisButtonPixActived(true)
    setisButtonCardActived(false)
  }
  function HandlePayment(){
   
    alert(`Total a pagar R$ ${total_price}`)
    setisPixVisible(false)
    setisCardVisible(false)
    setisClockVisible(true)
    setisApprovedVisible(false)
    setisDeliveredVisible(false)
    setisButtonPixActived(false)
    setisButtonCardActived(false)
    setisButtonPixDisabled(true)
    setisButtonCardDisabled(true)

    setTimeout(()=>{
      setisClockVisible(false)
      setisApprovedVisible(true)
      
      setTimeout(()=>{
        setisClockVisible(false)
        setisApprovedVisible(false)
        setisDeliveredVisible(true)
        setSelectedDishs([])
        
      },4000)

    },5000)
    
  }
    
  const HandlePrice=(array)=>{
    let total=0

    for (let i=0; i<array.length;i++){
      total+= array[i]    
    }

    total=total.toFixed(2)
    settotal_price( total)
   
  }

  const prices= selectedDishs.map(item=>item.qtd===1?item.price: item.price*item.qtd)
    
  useEffect(()=>{
    HandlePrice(prices)
  },[prices])
     
    
  return(
      <PaymentWrapper >
            <Header/>
            <Payment >
                <Section title="Meu pedido"  total={total_price} >
                  {selectedDishs.map((item,id)=>
                    <Description
                      key={id}
                      onClick={()=>HandleDeleteDishs(item.title)}
                      image={item.image}
                      qtd={item.qtd}
                      name={item.title}
                      price={((item.price)*item.qtd).toFixed(2)}
                      />
                   )}
                </Section>
                <Section title="Pagamento">
                  <CashSection>
                     <div>
                       <ButtonPayment onClick={HandlePixOption}  img={Pix} disabled={isButtonPixDisabled} isactive={isButtonPixActived} title="PIX" />
                       <ButtonPayment   onClick={HandleCardOption} img={Credit} disabled={isButtonCardDisabled} isactive={isButtonCardActived} title="Crédito"/>
                      </div>
                      {isPixVisible&&
                        <PixArea>
                          <img src={QR} alt="Logo do QR Code" />
                          <Button onClick={HandlePayment} img={buttonHeader} title='Finalizar Pagamento'/>
                        </PixArea>
                      }
                      {isCardVisible&&
                        <CardArea>
                          <Input type= 'number' placeholder='0000 0000 0000 0000 ' title='número do cartão'/>
                            <div>
                            <Input type= 'number' placeholder='04/25 ' title='Validade'/> 
                            <Input type= 'number' placeholder='04/25 ' title='CVC'/>
                            </div>
                          <Button type ='submit' onClick={HandlePayment} img={buttonHeader} title='Finalizar Pagamento'/>
                        </CardArea>
                      }
                      {isClockVisible&&
                        <WaitArea>
                          <img src={Clock} alt="Aguardando aprovação" />
                          <h1>Aguardando aprovação do pagamento...</h1>
                        </WaitArea>
                      } 
                      {isApprovedVisible&&
                        <WaitArea>
                          
                          <img src={Approved} alt="Aguardando aprovação" />
                          <h1>Pagamento aprovado!</h1>
                        </WaitArea>
                      } 
                      {isDeliveredVisible&&
                        <WaitArea>
                          
                          <img src={Delivered} alt="Aguardando aprovação" />
                          <h1>Pedido entregue!</h1>
                        </WaitArea>
                      } 
                  </CashSection>
                </Section>
          </Payment>
             <Footer/>
       </PaymentWrapper>
  )
}
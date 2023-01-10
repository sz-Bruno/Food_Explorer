import {PixWrapper} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Payment } from "../../components/Payment"
import { Section } from "../../components/Section"
import { Description } from "../../components/Description/indes"
import { CashSection } from "../../components/CashSection"
import { ButtonPayment } from "../../components/ButtonPayment"
import QR from "../../assets/images/qrcode.svg"
import Ravanello from "../../assets/images/ravanello.png"
import Pix from "../../assets/images/pix_image.svg"
import Credit from "../../assets/images/credit_card.svg"
import { useState } from "react"
export function PixPayment(){

    const [PixOption,setPixOption]= useState(false)
    const [CardOption,setCardOption]=useState(true)
    function HandlePix(){
        setPixOption(!PixOption)
        setCardOption(!CardOption)
    }
    
    return(
        <PixWrapper>
            <Header/>
            <Payment >
                <Section title="Meu pedido"  total="R$ 199,88" >
                    <Description 
                    image={Ravanello}
                    qtd="1"
                    name="Salada Ravanello"
                    price="R$ 49,97"

                    />
                    <Description 
                    image={Ravanello}
                    qtd="1"
                    name="Salada Ravanello"
                    price="R$ 49,97"

                    />
                    <Description 
                    image={Ravanello}
                    qtd="1"
                    name="Salada Ravanello"
                    price="R$ 49,97"

                    />
                    <Description 
                    image={Ravanello}
                    qtd="1"
                    name="Salada Ravanello"
                    price="R$ 49,97"

                    />
                    <Description 
                    image={Ravanello}
                    qtd="1"
                    name="Salada Ravanello"
                    price="R$ 49,97"

                    />
                    
                 
                </Section>

                <Section title="Pagamento">
                  <CashSection isPix={PixOption} isCard={CardOption}>
                    <ButtonPayment onClick={HandlePix}img={Pix}  isactive={PixOption} title="PIX" />
                     <ButtonPayment onClick={HandlePix} img={Credit} isactive={CardOption} title="Crédito"/>
                  
                  
                  </CashSection>

                </Section>
            </Payment>

            <Footer/>

        </PixWrapper>
    )
}
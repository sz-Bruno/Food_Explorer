import {PixWrapper} from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Payment } from "../../components/Payment"
import { Section } from "../../components/Section"

export function PixPayment(){
    return(
        <PixWrapper>
            <Header/>
            <Payment>
                <Section title="Meu pedido"/>
                <Section title="Pagamento"/>
            </Payment>

            <Footer/>

        </PixWrapper>
    )
}
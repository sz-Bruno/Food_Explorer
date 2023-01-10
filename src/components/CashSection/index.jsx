

import {CashWrapper,ButtonArea,CardArea} from "./style"
import QR from "../../assets/images/qrcode.svg"
import { Input } from "../../components/Input"
import buttonHeader from "../../assets/images/button_header.svg"
import { Button } from "../Button"

export function CashSection({children,isPix=false,isCard=false }){
 
    return(
        <CashWrapper >
            <ButtonArea>
            {children}
            </ButtonArea>
            
         
         {isPix &&
          
           <div> <img src={QR} alt="QR Code para pagamento" /></div>
        
            }

        {isCard &&
          
           
             <CardArea>
                <Input type="number" placeholder="0000 0000 0000 0000" title="Número do cartão  "/>
                <div>
                <Input type="number" placeholder="04/25" title="Validade  "/>
                <Input type="number" placeholder="04/25" title=" CVC"/>
                </div>
                <Button img={buttonHeader} title="Finalizar Pagamento"/>
             </CardArea>
             
           
        
            }
         
         
        
         
            
                           
        </CashWrapper>
    )
}
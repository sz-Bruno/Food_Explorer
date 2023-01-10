
import {ButtonPaymentWrapper} from "./style"


export function ButtonPayment({isactive=false,disabled,title,img,...rest}){
return(
    <ButtonPaymentWrapper {...rest}  isactive={isactive}>
        <img src={img}  />
         <p>{disabled? 'Processando...': title}</p>
         
    </ButtonPaymentWrapper>
)

}
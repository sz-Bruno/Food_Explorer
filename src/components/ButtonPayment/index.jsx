
import {ButtonPaymentWrapper} from "./style"


export function ButtonPayment({isactive,disabled,title,img,...rest}){
return(
    <ButtonPaymentWrapper {...rest} disabled={disabled} isactive={isactive}>
        <img src={img}  />
         <p>{title}</p>
         
    </ButtonPaymentWrapper>
)

}
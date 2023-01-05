import {PaymentWrapper} from "./style"

export function Payment({children,...rest}){

    return(
        <PaymentWrapper {...rest}>
           {children}
        </PaymentWrapper>
    )
}
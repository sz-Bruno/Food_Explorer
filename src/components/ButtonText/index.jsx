import {ButtonTextWrapper} from "./style"

export function ButtonText({title,...rest}){
    return(
        <ButtonTextWrapper {...rest}>
           {title}
        </ButtonTextWrapper>
    )
}
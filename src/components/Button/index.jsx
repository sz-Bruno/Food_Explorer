

import {ButtonWrapper} from "./style"

export function Button({title,...rest}){
    return(
        <ButtonWrapper {...rest}>
          {title}
        </ButtonWrapper>
    )
}
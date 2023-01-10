

import {ButtonWrapper} from "./style"

export function Button({title,img,...rest}){
    return(
        <ButtonWrapper {...rest}>
           <img src={img} />
          {title}
        </ButtonWrapper>
    )
}
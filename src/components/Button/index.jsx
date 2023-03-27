

import {ButtonWrapper} from "./style"

export function Button({title,img,onClick,...rest}){
    return(
        <ButtonWrapper onClick={onClick} {...rest}>
           <img src={img} />
          {title}
        </ButtonWrapper>
    )
}
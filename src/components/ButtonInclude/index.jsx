
import {IncludeWrapper} from "./style"

export function ButtonInclude({icon:Icon,title, onClick,...rest}){
    return(
        <IncludeWrapper onClick={onClick} {...rest}>
         { Icon && <Icon size={26}/>}
         {title}
        </IncludeWrapper>
    )
}
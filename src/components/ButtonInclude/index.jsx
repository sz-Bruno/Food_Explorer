
import {IncludeWrapper} from "./style"

export function ButtonInclude({icon:Icon,title,...rest}){
    return(
        <IncludeWrapper {...rest}>
         { Icon && <Icon size={26}/>}
         {title}
        </IncludeWrapper>
    )
}
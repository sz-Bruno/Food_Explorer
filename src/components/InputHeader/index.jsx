import { InputHeaderWrapper } from "./style"

export function InputHeader({icon:Icon,...rest}){
    return(
        <InputHeaderWrapper>
        {Icon&& <Icon size={20}/>}
        <input type="text" {...rest} />
        
        </InputHeaderWrapper>
    )
}
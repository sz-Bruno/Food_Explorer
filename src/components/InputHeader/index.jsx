import { InputHeaderWrapper } from "./style"

export function InputHeader({icon:Icon, onChange,...rest}){
    return(
        <InputHeaderWrapper>
        {Icon&& <Icon size={20}/>}
        <input type="text" onChange={onChange}{...rest} />
        
        </InputHeaderWrapper>
    )
}
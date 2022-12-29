import { InputWrapper } from "./style"

export function Input({title,...rest}){
    return(
        <InputWrapper >
          <label htmlFor="text">{title}</label>
        <input type="text"{...rest} />
        
        </InputWrapper>
    )
}
import { InputWrapper } from "./style"

export function Input({title, onChange,...rest}){
    return(
      <InputWrapper >
          <label htmlFor="text">{title}</label>
          <input type="text"{...rest} onChange={onChange} />
      </InputWrapper>
    )
}
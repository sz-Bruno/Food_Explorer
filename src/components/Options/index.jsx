import {OptionsWrapper,LeftBtn,RightBtn} from "./style"
import ButtonBack from "../../assets/images/back_button.svg"
import ButtonGo from "../../assets/images/go_button.svg"
export function Options({children,...rest}){
    return(
        <OptionsWrapper {...rest}>
            <LeftBtn><img src={ButtonBack} alt="Voltar" /></LeftBtn>
              <div>
              {children}
              </div>
              
            <RightBtn><img src={ButtonGo} alt="Avançar" /></RightBtn>
        </OptionsWrapper>
    )
}
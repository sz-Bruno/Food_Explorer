import {BackWrapper} from "./style"
import Left from "../../assets/images/back_button.svg"

export function Buttonback(){
    return(
        <BackWrapper>
            < img src={Left} alt="voltar" />
            <h1>voltar</h1>

        </BackWrapper>
    )
}
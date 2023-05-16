import{FooterWrapper,Copyright} from "./style"
import logoGrey from "../../assets/images/explorer_logo_grey.svg"


export function Footer(){
    return(
        <FooterWrapper>
          <div>
            <img src={logoGrey} alt="Logo do Explorer" />
            <h1>food explorer</h1>
          </div>
          
          <Copyright>
            &copy;
            <p>2022 - Todos os direitos reservados.</p>
          </Copyright>
        </FooterWrapper>
    )
}
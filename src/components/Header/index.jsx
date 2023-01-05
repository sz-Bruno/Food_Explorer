import{HeaderWrapper,ButtonHeader,ButtonSignOut} from "./style"
import logo from "../../assets/images/explorer_logo.svg"
import buttonHeader from "../../assets/images/button_header.svg"
import signOutButton from "../../assets/images/sign_out.svg"
import { InputHeader } from "../InputHeader"
import {FiSearch} from "react-icons/fi"

export function Header(){
    return(
        <HeaderWrapper>
          <div>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
          </div>
          <p>Meus Favoritos  </p>
          <InputHeader icon={FiSearch} placeholder="Busque pelas opções de pratos"/>
          <ButtonHeader>
            <img src={buttonHeader} alt="logo do botão Meu Pedido" />
            <p>Meu pedido (0) </p>
          </ButtonHeader>
          
          <ButtonSignOut>
          <img src={signOutButton} alt="botão signout" />
          </ButtonSignOut>
           
    
           

        </HeaderWrapper>
    )
}
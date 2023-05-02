import{HeaderWrapper,ButtonHeader,HeaderLogo} from "./style"
import logo from "../../assets/images/explorer_logo.svg"
import buttonHeader from "../../assets/images/button_header.svg"
import signOutButton from "../../assets/images/sign_out.svg"
import { InputHeader } from "../InputHeader"
import {FiSearch} from "react-icons/fi"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"


export function Header({children,onClick,...rest}){

  
  const {selectedDishs,SignOut}= useContext(AuthContext)
  
 
    return(
        <HeaderWrapper{...rest}>
          <HeaderLogo to='/'>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
          </HeaderLogo>
          <p>Meus Favoritos  </p>
          {children}
          <ButtonHeader to='/payment' onClick={onClick} >
            <img src={buttonHeader} alt="logo do botão Meu Pedido" />
            <p>Meu pedido ({selectedDishs.length}) </p>
          </ButtonHeader>
          
          <button className="Out_button" onClick={SignOut}>
          <img src={signOutButton} alt="botão signout" />
          </button>
           
    
           

        </HeaderWrapper>
    )
}
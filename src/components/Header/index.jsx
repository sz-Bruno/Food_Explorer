import{HeaderWrapper,ButtonHeader,HeaderLogo} from "./style"
import logo from "../../assets/images/explorer_logo.svg"
import buttonHeader from "../../assets/images/button_header.svg"
import signOutButton from "../../assets/images/sign_out.svg"
import { InputHeader } from "../InputHeader"
import {FiSearch} from "react-icons/fi"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"


export function Header({onClick,...rest}){
  const {selectedDishs}= useContext(AuthContext)
  const HandleOut=()=>{
    console.log('saiu')
  }
 
    return(
        <HeaderWrapper{...rest}>
          <HeaderLogo to='/'>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
          </HeaderLogo>
          <p>Meus Favoritos  </p>
          <InputHeader onChange={(e)=>console.log(e.target.value)} icon={FiSearch} placeholder="Busque pelas opções de pratos"/>
          <ButtonHeader to='/payment' onClick={onClick} >
            <img src={buttonHeader} alt="logo do botão Meu Pedido" />
            <p>Meu pedido ({selectedDishs.length}) </p>
          </ButtonHeader>
          
          <button className="Out_button" onClick={HandleOut}>
          <img src={signOutButton} alt="botão signout" />
          </button>
           
    
           

        </HeaderWrapper>
    )
}
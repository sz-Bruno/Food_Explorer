import{HeaderWrapper,ButtonHeader,HeaderLogo,HeaderLogoMobile} from "./style"
import logo from "../../assets/images/explorer_logo.svg"
import list from "../../assets/images/list_menu.svg"
import close from "../../assets/images/close.svg"
import buttonHeader from "../../assets/images/button_header.svg"
import signOutButton from "../../assets/images/sign_out.svg"
import { InputHeader } from "../InputHeader"
import {FiSearch} from "react-icons/fi"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Header({children,onClick,...rest}){
    const {selectedDishs,SignOut,find,setfind}= useContext(AuthContext)
    const [ismenuactive,setIsmenuactive]=useState(false)
    const navigate= useNavigate()
    function handlemenu(){
      setIsmenuactive(true)
    }
    function handledeskmenu(){
      setIsmenuactive(false)
    }
    function handlepayment(){
       navigate('/payment')
    }
    function handlehome(){
      setfind('')
      setIsmenuactive(false)
      navigate('/')
    }
    function handleout(){
      
      handlehome()
      SignOut()
    }
   

   
    return(
        <HeaderWrapper{...rest}>
        
          <div className="list_menu">
            <button ><img src={list} alt="lista menu" onClick={handlemenu} /></button>
            <HeaderLogoMobile to='/'>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
            </HeaderLogoMobile>
            
          </div>
          {
            ismenuactive&&
            <div className="side_info">
            <div className="header_mobile"><button ><h2>Menu</h2><img src={close} alt="lista menu" onClick={handledeskmenu} /></button></div>
           <div className="inner">
           {children}
           <ul>
           <li><button onClick={handlehome}>Home</button></li>
           <li><button onClick={handlepayment}>Meus Pedidos ({selectedDishs.length})</button></li>
           <li><button onClick={handleout}>SignOut</button></li>
           </ul>
           </div>
          </div>
          }
          <div className="desk_header">
            <HeaderLogo to='/'>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
            </HeaderLogo>
            <p>Meus Favoritos </p>
          {children}
          <ButtonHeader to='/payment' onClick={onClick} >
            <img src={buttonHeader} alt="logo do botão Meu Pedido" />
            <p>Meu pedido ({selectedDishs.length}) </p>
          </ButtonHeader>
          <button className="Out_button" onClick={SignOut}>
            <img src={signOutButton} alt="botão signout" />
          </button>
          </div>
        </HeaderWrapper>
     )
}
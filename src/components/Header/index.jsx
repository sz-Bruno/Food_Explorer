import{HeaderWrapper} from "./style"
import logo from "../../assets/explorer_logo.svg"
import { InputHeader } from "../InputHeader"
import {FiSearch} from "react-icons/fi"

export function Header(){
    return(
        <HeaderWrapper>
          <div>
            <img src={logo} alt="Logo do Explorer" />
            <h1>food explorer</h1>
          </div>
          <p>Meus Favoritos</p>
          <InputHeader icon={FiSearch} placeholder="Busque pelas opções de pratos"/>
          
          

        </HeaderWrapper>
    )
}
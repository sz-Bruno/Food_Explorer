import {SignUpWrapper,Form,Background,ButtonText} from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import logo from "../../assets/images/explorer_logo.svg"
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"
import { useState } from "react"
export function SignUp(){
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const Admin=0
    const {SignUp}=useContext(AuthContext)

    function handleSignUp(e){
        e.preventDefault()
        SignUp({name,email,password,Admin})
    }

    return(
        <SignUpWrapper>
            <Background>
                <img src={logo} alt="Logo da Explorer"  />
                <h1>food explorer</h1>
            </Background>
            <Form>
                <h1>Crie sua conta</h1>
               <Input placeholder="Exemplo:Maria da Silva" title="Nome" onChange={(e)=>setName(e.target.value)}/>
               <Input type="email" placeholder="Exemplo:Maria@mail.com" title="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
               <Input  minLength ="6" type ="password" placeholder="No mínimo 6 caracteres" title="Senha" onChange={(e)=>setPassword(e.target.value)}/>
               <Button title="Criar conta"onClick={(e)=>handleSignUp(e)}/>
               <ButtonText to='/' >
               Já tenho uma conta
               </ButtonText>
            </Form>
        </SignUpWrapper>
    )
}
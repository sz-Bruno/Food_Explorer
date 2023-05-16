import {SignInWrapper,Form,Background,ButtonText} from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { AuthContext } from "../../hooks/Auth"
import { useContext } from "react"
import logo from "../../assets/images/explorer_logo.svg"
import { useState } from "react"

export function SignIn(){
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const {SignIn,User}= useContext(AuthContext)
     
    function handleSignIn(e){
        e.preventDefault()
        SignIn({email,password})
        console.log(User)
    }
    return(
        <SignInWrapper>
             <Background>
                <img src={logo} alt="Logo da Explorer"  />
                <h1>food explorer</h1>
             </Background>
            <Form>
               <h1>Faça o login</h1>
               <Input onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Exemplo:Maria@mail.com" title="E-mail  "/>
               <Input onChange={(e)=>setPassword(e.target.value)} minLength ="6" type ="password" placeholder="No mínimo 6 caracteres" title="Senha"/>
               <Button onClick={(e)=>handleSignIn(e)} title="Entrar"/>
               <ButtonText to='/register'>
                criar conta
               </ButtonText>
            </Form>
        </SignInWrapper>
    )
}
import {SignInWrapper,Form,Background,ButtonText} from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logo from "../../assets/images/explorer_logo.svg"
export function SignIn(){
    return(
        <SignInWrapper>
             <Background>
                <img src={logo} alt="Logo da Explorer"  />
                <h1>food explorer</h1>
             </Background>
            <Form>
                <h1>Faça o login</h1>
               <Input type="email" placeholder="Exemplo:Maria@mail.com" title="E-mail  "/>
               <Input  minLength ="6" type ="password" placeholder="No mínimo 6 caracteres" title="Senha"/>
               <Button title="Entrar"/>
               <ButtonText to='/register'>
                criar conta
               </ButtonText>
            </Form>
          
           
        </SignInWrapper>
    )
}
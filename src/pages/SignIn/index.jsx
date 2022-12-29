import {SignInWrapper,Form,Background} from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import logo from "../../assets/explorer_logo.svg"
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
               <ButtonText title=" Criar uma conta"/>
            </Form>
          
           
        </SignInWrapper>
    )
}
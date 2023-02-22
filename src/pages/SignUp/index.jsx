import {SignUpWrapper,Form,Background,ButtonText} from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import logo from "../../assets/images/explorer_logo.svg"
export function SignUp(){
    return(
        <SignUpWrapper>
             <Background>
                <img src={logo} alt="Logo da Explorer"  />
                <h1>food explorer</h1>
             </Background>
            <Form>
                <h1>Crie sua conta</h1>
               <Input placeholder="Exemplo:Maria da Silva" title="Nome"/>
               <Input type="email" placeholder="Exemplo:Maria@mail.com" title="E-mail  "/>
               <Input  minLength ="6" type ="password" placeholder="No mínimo 6 caracteres" title="Senha"/>
               <Button title="Criar conta"/>
               <ButtonText to='/'>
               Já tenho uma conta
               </ButtonText>
            </Form>
          
           
        </SignUpWrapper>
    )
}
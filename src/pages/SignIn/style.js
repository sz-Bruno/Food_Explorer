import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInWrapper= styled.div`

height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;

@media(max-width:768px){
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    gap:15px
}


`

export const Form= styled.form`
display: flex;
align-self: center;
flex-direction: column;
max-width: 476px;
max-height: 540px;
padding: 64px;
justify-content: center;
align-items: center;
border-radius: 16px;
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};

@media(max-width:375px){
    max-width: 90%;
    padding: 30px;
    
}

h1{
    
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:32px;
    line-height:24px;
    color:${({theme})=>theme.COLORS.WHITE};
    margin-bottom: 50px;

}

`

export const Background= styled.div`
display:flex;
height: 50px;
gap:19px;
margin:0 auto;
align-self: center;

>h1{
    font-family: 'Roboto', sans-serif;
    font-size:42.5px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.WHITE};
}

>img{
    width: 49px;
    height: 47px;
}

@media(max-width:375px){
   h1{
    font-size: 30px;
    align-self: center;
   }
   
   

    
}

`
export const ButtonText= styled(Link)`
background: transparent;
border:none;
color:${({theme})=>theme.COLORS.WHITE};
font-family: 'Poppins', sans-serif;
font-size: 14px;
line-height: 24px;
margin-top: 32px;

`


import styled from "styled-components";

export const SignUpWrapper= styled.div`

height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;




`

export const Form= styled.form`
display: flex;
align-self: center;
flex-direction: column;
width: 476px;
height: 600px;
padding: 64px;
justify-content: center;
align-items: center;
margin-left: 108px;
border-radius: 16px;
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};



h1{
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:32px;
    line-height:24px;
    color:${({theme})=>theme.COLORS.WHITE};
    margin-bottom: 32px;

}

`

export const Background= styled.div`
display:flex;
height: 50px;
gap:19px;
margin-top:285px;
margin-left:153px;

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



`
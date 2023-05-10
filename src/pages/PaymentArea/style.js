
import styled from "styled-components";


export const PaymentWrapper= styled.div`

display: grid;
grid-template-areas: 
"header"
"content"
"footer"
;
grid-template-rows: 104px auto 77px ;
width: 100%;
height: 100vh;
overflow: auto;
&&::-webkit-scrollbar{
    display: none;
}

`

export const CashSection= styled.section`

width: 100%;

height: 445px;
border: 1px solid rgba(255, 255, 255, 0.1);

>div{
    display: flex;
    width: 100%;
}

`

export const CashBody= styled.div`
height: 364px;
width: 100%;



`
export const PixArea= styled.div`
padding:0px 91px 20px 91px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
justify-content: center;
gap:15px;
>img{
    width: 250px;
   
}

`
export const CardArea= styled.form`
display: flex;
flex-direction: column;
padding:57px 91px;

@media(max-width:425px){
    padding:10px
}
>div{
    display: flex;
    gap:14px;
}

`
export const WaitArea= styled.div`

display: flex ;
flex-direction:column ;
margin-top: 57px;
justify-content: center;
align-items: center;
gap:37px;
font-family: 'Roboto', sans-serif;
font-size:24px;
font-weight: 400;
color:${({theme})=>theme.COLORS.GREY_INPUT};


>img{
    
    width: 104px;
}

`

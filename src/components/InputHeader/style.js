import styled from "styled-components";


export const InputHeaderWrapper= styled.div`
max-width: 410px;
height: 48px;
display: flex;
align-items: center;
background-color: ${({theme})=>theme.COLORS.HEADER_INPUT};
padding:16px 14px;
border-radius: 5px;
margin-right: 32px;
gap:8px;

>input{
    width: 100%;
    outline: none;
   background: transparent;
   border: none;
   color: ${({theme})=>theme.COLORS.GREY_INPUT};
   font-size: 16px;
  
}
>svg{
    color: ${({theme})=>theme.COLORS.GREY_INPUT};

}
@media(max-width: 1200px){
    max-width: 200px;
}
@media(max-width: 675px){
    max-width: 50px;
    margin-right: 0;
}

@media(max-width: 425px){
    max-width: 50px;
    max-height: 15px;
    margin-right: 0;
}

`
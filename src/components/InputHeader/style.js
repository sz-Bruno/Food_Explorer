import styled from "styled-components";


export const InputHeaderWrapper= styled.div`
width: 410px;
height: 48px;
display: flex;
align-items: center;
background-color: ${({theme})=>theme.COLORS.HEADER_INPUT};
padding:16px 14px;
border-radius: 5px;
margin-right: 32px;
>input{
    width: 100%;
   background: transparent;
   border: none;
  
}
>svg{
    color: ${({theme})=>theme.COLORS.GREY_INPUT};

}
`
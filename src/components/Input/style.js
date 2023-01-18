

import styled from "styled-components";

export const InputWrapper= styled.div`
width: 100%;
 display: flex;
 flex-direction:column;

 margin-bottom: 32px;

 >label{
    color:${({theme})=>theme.COLORS.GREY_INPUT};
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
   margin-bottom: 5px;
 }

 >input{
    width: 100%;
    height: 48px;
    padding:16px 14px;
    border: 1px solid ${({theme})=>theme.COLORS.WHITE} ;
    border-radius: 5px;
    background: transparent;
    color:${({theme})=>theme.COLORS.GREY_INPUT};
 }
`
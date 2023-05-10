

import styled from "styled-components";


export const ButtonWrapper=styled.button`

width: 100%;
height: 48px;
padding: 12px;
display: flex;
justify-content: center;
align-items: center;
gap:11px;
background-color: ${({theme})=>theme.COLORS.RED};
border: none;
border-radius: 5px;
color: ${({theme})=>theme.COLORS.WHITE};
font-family: 'Poppins', sans-serif;
font-size: 14px;
line-height: 24px;

@media(max-width:425px){
    width: 200px;
}

`
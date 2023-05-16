import styled from "styled-components";


export const IncludeWrapper= styled.button`
display: flex;
align-items: center;
padding:12px 24px;
background-color: ${({theme})=>theme.COLORS.RED};
gap:11px;
color:${({theme})=>theme.COLORS.WHITE};
border: none;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 24px;
@media(max-width:765px){
font-size: 12px;
padding:10px;
margin:0 auto
}

`
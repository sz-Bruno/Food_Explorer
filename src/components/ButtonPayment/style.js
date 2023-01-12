import styled from "styled-components";


export const ButtonPaymentWrapper= styled.button`
width: 100%;
height: 81px;
margin-top: 0;
background-color: ${({theme,isactive})=> isactive? theme.COLORS.CLICKED_COLOR: theme.COLORS.NO_CLICKED_COLOR};
border:1px solid rgba(255, 255, 255, 0.1);
display: flex;
align-items: center;
justify-content: center;
color:${({theme})=>theme.COLORS.WHITE};
font-family: 'Roboto', sans-serif;
font-size:16px;
line-height:16px;
gap:8px;

&:disabled{
    background-color: ${({theme})=>theme.COLORS.NO_CLICKED_COLOR};
}

`
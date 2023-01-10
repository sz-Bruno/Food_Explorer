

import styled from "styled-components";

export const HeaderWrapper= styled.header`
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};
display:flex;
grid-area: header;
align-items: center;
padding:0px 116px;
gap:32px;


>div{
    display: flex;
    align-items: center;
    gap:11px;
    
    >h1{
    font-family: 'Roboto', sans-serif;
    font-size:25px;
    line-height: 29px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.WHITE};
    }

    >img{
        width: 30px;
    }
}
>p{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
    line-height: 26px;
    
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
}


`

export const ButtonHeader= styled.button`
width: 216px;
height: 56px;
display: flex;
align-items: center;
gap:11px;
justify-content: center;
border-radius: 5px;
border: none;
padding:12px 32px 12px 32px;
background-color: ${({theme})=>theme.COLORS.RED};

>p{
color: ${({theme})=>theme.COLORS.WHITE};
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 24px;
}

>img{
    width: 26px;
    
}
`
export const ButtonSignOut= styled.button`
background: transparent;
border: none;

`
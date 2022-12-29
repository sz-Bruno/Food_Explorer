

import styled from "styled-components";

export const HeaderWrapper= styled.header`
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};
display:flex;
grid-area: header;
align-items: center;
padding:0px 125px;
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
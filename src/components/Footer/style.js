import styled from "styled-components";

export const FooterWrapper= styled.header`
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};
display:flex;
grid-area: footer;
align-items: center;
padding:0px 116px;
justify-content: space-between;

>div{
    display: flex;
    align-items: center;
    gap:11px;
    
    >h1{
    font-family: 'Roboto', sans-serif;
    font-size:25px;
    line-height: 29px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.SMOKE_GREY};
    
    }

    >img{
        width: 30px;
        
        
    }
}




`

export const Copyright= styled.div`
font-family: 'DM Sans', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${({theme})=>theme.COLORS.WHITE}
`
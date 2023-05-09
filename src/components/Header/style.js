

import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper= styled.header`
background-color: ${({theme})=>theme.COLORS.FORM_BLUE};
display:flex;
grid-area: header;
align-items: center;
padding:0px 116px;
justify-content: space-between;
width: 100%;


.Out_button{
    background: transparent;
    border: none;
}



>p{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
    line-height: 26px;
    
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
}

@media(max-width:768px){
    padding: 0px;
}
@media(max-width:675px){
    
    justify-content: space-around;
    gap:15px
    p{
        font-size: 10px;
        line-height: 10px;
    }
    h1{
        font-size: 12px;
        line-height: 12px;
    }
    .Out_button{
        img{
            width: 15px;
        }
    }
}
@media(max-width:526px){
    padding: 0 20px;
    justify-content: left;
    gap:20px;
    p{
        font-size: 10px;
        line-height: 10px;
    }
    h1{
        font-size: 12px;
        line-height: 12px;
    }
    .Out_button{
        img{
            width: 15px;
        }
    }
}
@media(max-width:375px){
    padding: 0 20px;
    justify-content: space-between;
   
    p{
        font-size: 10px;
        line-height: 10px;
    }
    h1{
        font-size: 12px;
        line-height: 12px;
    }
    .Out_button{
        img{
            width: 12px;
        }
    }
}


`
export const HeaderLogo=styled(Link)`

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
    @media(max-width:1200px){
    >h1{
        font-size: 16px;
    }
    >img{
        width: 20px;
    }
        @media(max-width:675px){
            padding: 0px;
            >h1{
        font-size: 12px;
          }
    >img{
        width: 16px;
    }
        }
       
}

`
export const ButtonHeader= styled(Link)`
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
@media(max-width:675px){
    width: 80px;
height: 36px;
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
font-size: 9px;
line-height: 10px;
}

>img{
    width: 16px;
    
}
@media(max-width:500px){
    width: 22px;
height: 36px;
display: flex;
align-items: center;
gap:11px;
justify-content: center;
border-radius: 5px;
border: none;
padding:5px 8px ;
background-color: ${({theme})=>theme.COLORS.RED};


>p{
color: ${({theme})=>theme.COLORS.WHITE};
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 8px;
line-height: 10px;
}

>img{
    width: 16px;
    
}
}
@media(max-width:425px){
    width: 45px;
height: 30px;
display: flex;
align-items: center;
gap:5px;
justify-content: center;
border-radius: 5px;
border: none;
padding:5px 8px;
background-color: ${({theme})=>theme.COLORS.RED};


>p{
color: ${({theme})=>theme.COLORS.WHITE};
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 7px;
line-height: 9px;
}

>img{
    width: 12px;
    
}
}
}
`

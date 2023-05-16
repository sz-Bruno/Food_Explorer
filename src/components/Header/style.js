

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

.desk_header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
   
    visibility: visible;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    @media(max-width:500px){
        display: none;
        
    }
}
@media(max-width:692px){
        display: none;
        
    }
}
.side_info{
   
        visibility: visible;
        width: 100%;
        height: 100%;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        
        flex-direction: column;
        background-color:rgba(0,0,0,.88);
        
       font-family: 'Roboto', sans-serif;
       color:${({theme})=>theme.COLORS.WHITE};
       button{
        font-family: 'Roboto', sans-serif;
       color:${({theme})=>theme.COLORS.WHITE};
        gap:16px;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        width: 30%;
        margin-right: 80%;
        margin-top: 20px;
        img{
            width: 30%;
            
        }
       }
       ul{
        margin-top: 20px;
         li{
            padding: 20px 10px;
            border:none;
            border-bottom: 1px solid ${({theme})=>theme.COLORS.SMOKE_GREY};
            list-style: none;
            
            button{
                width: 100%;
                font-size: 20px;
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
               
            }
           
         }
       }
       .header_mobile{
        width: 100%;
        height: 104px;
        display: flex;
        padding: 56px 28px 28px 28px;
        align-items: center;
        background-color: ${({theme})=>theme.COLORS.FORM_BLUE};
       }
       .inner{
        padding: 20px;
       }
}
.list_menu{
    display: flex;
    justify-content: space-between;
    width: 0;
    button{
    background: none;
    border: none;
    visibility: hidden;
    img{
        width: 30px;
    }
    
    }
    @media(max-width:692px){
        visibility: visible;
        display: flex;
        width: 100%;
        padding:0 50px;
       gap:50px;
        justify-content: left;
        button{
            visibility: visible;
        }
        
    }
}



@media(max-width:768px){
 padding: 0 50px;
}

@media(max-width:435px){
 padding: 0 20px;
}


`
export const HeaderLogoMobile=styled(Link)`

    display: flex;
    align-items: center;
    gap:11px;
  visibility: hidden;
    
   

    @media(max-width:692px){
      visibility: visible;

      >h1{
    font-family: 'Roboto', sans-serif;
    font-size:18px;
    line-height: 14px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.WHITE};
    }
    >img{
        width: 30px;
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
    line-height: 19px;
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
           
            >h1{
        font-size: 16px;
          }
    >img{
        width: 20px;
    }
        }
      
}

`
export const ButtonHeader= styled(Link)`
max-width: 200;
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

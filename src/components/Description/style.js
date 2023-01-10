import styled from "styled-components";

export const DescriptionWrapper= styled.div`
width: 90%;
display:flex;
gap:13px;
align-items: center;
margin-bottom: 20px;

>img{
    width: 100px;
   
}
`

export const Details= styled.div`
    display:block;
    color:white;
    font-size: 20px;

    >button{
       background: none;
       border:none;
       margin-top: 10px;
       color:${({theme})=>theme.COLORS.LIGHT_RED};
       font-family: 'Roboto', sans-serif;
       font-style: normal;
       font-size:14px;
       line-height:19px;

    }
    >div{
        display:flex;
        gap:10px;

        >h1{
            color:${({theme})=>theme.COLORS.HEADER_GRAY};
            font-family: 'Poppins', sans-serif;
            font-weight:500;
            font-size:28px;
            line-height:20px;
        }
        >h3{
            color:${({theme})=>theme.COLORS.GREY_INPUT};
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size:14px;
            line-height:19px;
        }
       
    }

`
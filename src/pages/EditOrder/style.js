import styled from "styled-components";


export const EditWrapper= styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-areas: "header" "content" "footer" ;
grid-template-rows: 104px auto 77px; 
overflow-x: hidden;
`

export const Content= styled.div`
width: 100%;

grid-area: content;
padding: 0px 116px;
margin-bottom: 194px;

>div{
    display: flex;
}

`

export const Upload= styled.div`
 width: 220px;
 height: 48px;
 display: flex;
 align-items: center;
 justify-content: center;
 padding:12px 32px;
 border:1px solid ${({theme})=>theme.COLORS.WHITE};
 border-radius: 5px;
 

label{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size:12px;
    line-height:24px;
    color:${({theme})=>theme.COLORS.WHITE};
    gap:8px;
    color:white;
   >svg{
    width: 24px;
    height: 24px;
   }
}
input{
    display: none;
}

`
export const ImageArea= styled.div`
display: flex;
margin-top: 0px;
gap:32px;

>div{
    
    display:flex;
    flex-direction: column;
    p{
    color:${({theme})=>theme.COLORS.GREY_INPUT};
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
}
   
}

`

export const InfoArea= styled.div`

width: 100%;
display: flex;
flex-direction: column;
p{
    color:${({theme})=>theme.COLORS.GREY_INPUT};
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
}

`

export const Ingredients_Price= styled.div`

display: flex;
gap:48px;

`
export const Description= styled.textarea`
width: 100%;
height: 196px;
background: none;
border:1px solid ${({theme})=>theme.COLORS.WHITE};
border-radius: 5px;
color:${({theme})=>theme.COLORS.GREY_INPUT};
font-size: 16px;
line-height: 16px;
font-family: 'Roboto', sans-serif;
padding: 5px;

`
export const Form = styled.form`
width: 100%;

>div{
    display: flex;
}

`
export const Button = styled.button`
width: 357px;
height: 48px;
padding:12px 32px;
border: 1px solid white;
border-radius: 5px;
background-color: ${({theme})=>theme.COLORS.TAG_COLOR};
margin-top: 24px;
margin-left: 763px;


h1{
    color:${({theme})=>theme.COLORS.WHITE};
    font-size: 14px;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

`
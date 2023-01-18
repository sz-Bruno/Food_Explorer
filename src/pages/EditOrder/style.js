import styled from "styled-components";


export const EditWrapper= styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-areas: "header" "content" "footer" ;
grid-template-rows: 104px auto 77px; 



`
export const Content= styled.div`
width: 100%;
grid-area: content;
padding: 0px 116px;
>div{
    display: flex;
}

`
export const Button= styled.button`
grid-area: content;
width: 100px;
height: 50px;
display: flex;
gap:11px;
align-items: center;
margin-top: 24px;
background: none;
border: none;

h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size:24px;
    line-height:33px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
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
export const TagArea= styled.div`

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
gap:48px

`






export const Description= styled.textarea`
width: 100%;
height: 196px;
background: none;
margin-bottom: 194px;
border:1px solid ${({theme})=>theme.COLORS.WHITE};
 border-radius: 5px;
 color:${({theme})=>theme.COLORS.GREY_INPUT};
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
    padding: 5px;

`
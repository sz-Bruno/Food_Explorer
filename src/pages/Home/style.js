import styled from "styled-components";


export const TesteWrapper= styled.div`

width: 100%;
height: 100vh;
background-color: "#1E1E1E";
display: grid;
grid-template-areas: 
"header"
"content"
"footer";
grid-template-rows: 104px auto 77px;
overflow: auto;
&&::-webkit-scrollbar{
    display: none;
}






`

export const MainContent= styled.section`
width: 100%;
padding:0 125px;
grid-area: content;
position: relative;
margin-bottom: 98px;


>img{
   position: absolute;
    top:18px;
    left: 70px;
}

>div{
   
    background-image: linear-gradient(${({theme})=>theme.COLORS.LOGO_CANDIE});
    color:blue;
    width:1120px;
    height: 260px;
    margin-top: 164px;
    margin-bottom: 48px;
    border-radius: 8px;
    gap:8px;
    display:flex;
    flex-direction: column;


    >h1{
       
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:40px;
    line-height:56px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    margin-left: 597px;
    margin-top: 87px;
    
    }
    >p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size:16px;
    line-height:22px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
     margin-left:597px
    }
}



`
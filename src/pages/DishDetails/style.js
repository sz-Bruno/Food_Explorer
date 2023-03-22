import styled from "styled-components";


export const DetailsWrapper= styled.div`
width: 100%;
height: 100vh;
display:grid;
grid-template-areas: "header" "content" "footer";
grid-template-rows: 104px auto 77px;
 
 .ingredients{
    display: flex;
    margin-top: 26px;
    gap:23px;
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    font-size:18px;
    line-height:25px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    >span{
        padding:4px 8px;
        border-radius: 5px;
        background-color: #192227;
    }

 }
`
export const Content= styled.div`
grid-area: content;
width: 100%;
padding:0 116px;
margin-bottom: 155px;
>div{
    display: flex;
    gap:40px;
    margin-top: 40px;

    >img{
        width: 390px;
    }
}
`
export const Description= styled.div`
width: 100%;
color:white;
h1{
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:40px;
    line-height:56px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    margin-bottom: 8px;
}
h2{
    width: 600px;
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    font-size:24px;
    line-height:33px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
}

    
   


`
export const Ingredients_List= styled.div`
    width: 100%;
    height:65px;
    margin-top: 26px;
    display: flex;
    gap:22px;
`
export const Add_Price_Area= styled.div`
width: 500px;
margin-top: 47px;
display: flex;
gap:30px;
align-items: center;

h2{
width: 130px;
line-height: 51px;
font-size: 32px;
color: ${({theme})=>theme.COLORS.GREEN_MONEY};
font-family: 'Roboto', sans-serif;
font-weight: 400;
}

div{
    display: flex;
    gap:17px;
    align-items: center;
    button{
        background: none;
        border: none;
        display: flex;
        align-items: center;
    }
    h3{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight:'bold';
        line-height: 32px;
    }
}


`
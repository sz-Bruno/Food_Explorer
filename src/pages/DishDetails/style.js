import styled from "styled-components";



export const DetailsWrapper= styled.div`
width: 100%;
height: 100vh;
display:grid;
grid-template-areas: "header" "content" "footer";
grid-template-rows: 104px auto 77px;
overflow: auto;
&&::-webkit-scrollbar{
    display: none;
}
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
height:100vh;
padding:0 116px;
margin-bottom: 155px;

>div{
    display: flex;
    gap:40px;
    margin-top: 40px;

    >img{
        width: 390px;
        margin-left: 20px;
    }
}
@media(max-width:1200px){
    .details{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
@media(max-width:768px){
   
    padding: 0 50px;
    margin-bottom: 100%;
    .details{
       margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
    }
}
@media(max-width:425px){
    
    padding: 0 20px;
    
    margin-bottom: 100%;
    .details{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50px;
        
        img{
            width: 200px;
            
        }
        >div{
           gap:5px;
           margin-top: 5px;
        }
    }
    
}
`
export const Description= styled.div`
width: 100%;
color:white;
@media(max-width:768px){
  
    display: flex;
    flex-direction: column;
    gap:20px;
}
    @media(max-width:375px){
       
        text-align: center;
        .ingredients{
            font-size: 9px;
            span{
                padding: 2px;
                
            }
        }
    }

h1{
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:40px;
    line-height:56px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    margin-bottom: 8px;
   
    @media(max-width:425px){
        font-size: 30px;
        line-height: 20px;
    }
    @media(max-width:375px){
        font-size: 30px;
        line-height: 20px;
    }
    
}
h2{
    width: 600px;
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    font-size:24px;
    line-height:33px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    @media(max-width:768px){
        width: 100%;
        font-size: 20px;
        line-height: 20px;
    }
    @media(max-width:425px){
       
        font-size: 20px;
        line-height: 20px;
    }
    @media(max-width:375px){
        
        font-size: 14px;
        line-height: 20px;
    }
}

    
   


`

export const Add_Price_Area= styled.div`
width: 500px;
margin-top: 47px;
display: flex;
gap:30px;
align-items: center;

@media(max-width:768px){
    width: 30%;
    display: flex;
    flex-direction: column;
    >h2{
        font-size: 50px;
    }
    @media(max-width:425px){
        align-self: center;
        width: 300px;
       margin-top: 10px;
       gap:5px;
       
       .add_price{
       
        img{
            width: 20px;
        }
       }
        
    }
}

h2{
width: 130px;
line-height: 51px;
font-size: 32px;
color: ${({theme})=>theme.COLORS.GREEN_MONEY};
font-family: 'Roboto', sans-serif;
font-weight: 400;
}

.add_price{
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
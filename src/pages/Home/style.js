import styled from "styled-components";
import { Link } from "react-router-dom";


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

@media(max-width:1300px){
    max-width:100%;
    padding:0 20px;
    

    
}



.edit{
    
    margin-top: 20px;
    display: flex;
    margin-left: 9px;
    display: flex;
align-items: center;
padding:10px 20px;
background-color: ${({theme})=>theme.COLORS.RED};
gap:11px;
color:${({theme})=>theme.COLORS.WHITE};
border: none;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 24px;
}
.delete{
    
    margin-top: 20px;
    display: flex;
    margin-right: 9px;
    display: flex;
align-items: center;
padding:10px 20px;
background-color: ${({theme})=>theme.COLORS.RED};
gap:11px;
color:${({theme})=>theme.COLORS.WHITE};
border: none;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 24px;
}
.button_admin{
    display: flex;
    gap:15px;
}
.carousel{
    display: flex;
    max-width: 1120px;
    
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    
  @media(max-width:1070px){
    width: 600px;
  }
  @media(max-width:768px){
    max-width:500px
  
  }
  @media(max-width:695px){
  padding: 0 20px;
  
  }
  @media(max-width:615px){
    width: 100%;
  
  }
  @media(max-width:467px){

  width: 70%;
 
  
  }
}
.left{
    background: linear-gradient(rgba(0, 10, 15, 0.27),rgba(0, 10, 15, 1));
    border:none;
    position: absolute;
    width:116px;
    height: 448px;
   :hover{
    filter: brightness(3.0);
   }
   @media(max-width:768px){
   display: none;
   width: 80px;
   height: 200px;
   
   }
}
.right{
    background: linear-gradient(rgba(0, 10, 15, 0.27),rgba(0, 10, 15, 1));
    border:none;
    position: absolute;
    left: 1130px;
    width:116px;
    height: 448px; 
    :hover{
    filter: brightness(3.0);
   }
   @media(max-width:1300px){
   
   left:880px

   }
   @media(max-width:1070px){
   
   left:500px
   
   }
   @media(max-width:768px){
   display: none;
    left: 150px;
   width: 80px;
   height: 200px;
   
   }
   
}
.Add_Area{
    display: flex;
  width: 208px;
  justify-content: center;
  margin:17px 46px 36px 46px;
  @media(max-width:425px){
    margin:0 auto;
  }
 
>div{
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight:'bold';
  line-height: 32px;
  display:flex;
  align-items: center;
  gap:17px;
  margin-right: 19px;
 

  >button{
  display:flex;
  align-self: center;
  background:none;
  border:none;
  >img{
  width: 18px;
  object-fit: contain;
  color: ${({theme})=>theme.COLORS.WHITE};
  }

  }
  >h3{

  color: ${({theme})=>theme.COLORS.GREY_INPUT};

 }
  
}
@media(max-width:760px){
    width: 30%;
    display: flex;
    flex-direction: column;
    gap:10px;
   
}
}
.add_dish{
    display: flex;
align-items: center;
padding:12px 24px;
background-color: ${({theme})=>theme.COLORS.RED};
gap:11px;
color:${({theme})=>theme.COLORS.WHITE};
border: none;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 24px;
}
.Dish_Wrapper{
width: 300px;
height: 512px;
border-radius: 8px;
text-align: center;
display:flex;
background-color:${({theme})=>theme.COLORS.CARD_DISH};
border: 1px solid rgba(0, 0, 0, 0.65);
display: block;
margin-right: 27px;
margin-bottom: 8px;



:hover{
    transform: scale(1.1);
    transition: all 1s;
}






>img{
    width:176px;
    height:176px;
    border-radius:50%;
    margin:35px 62px 16px;

    @media(max-width:765px){
    width: 100px;
    height: 100px;
    
}
}




>p{
margin:0 40px 0 40px;
white-space: normal;
line-height: 22.4px;
font-size: 14px;
text-align: justify;
color: ${({theme})=>theme.COLORS.GREY_INPUT};
font-family: 'Roboto', sans-serif;
font-style: 'Regular';

@media(max-width:425px){
    font-size: 12px;
}
}
>h2{
line-height: 51px;
font-size: 32px;
color: ${({theme})=>theme.COLORS.GREEN_MONEY};
font-family: 'Roboto', sans-serif;
font-weight: 400;


}

}

.candie{
   max-width: 500px;
   position: absolute;
    bottom:0px;
    left: 0px;
    animation-name:  topdown;
    animation-duration: 4s;

    @media(max-width:1070px){
     width: 300px;
    
    }
    
      
       @media(max-width:500px){
        width: 200px;
        
       }
}

.banner{
   position: relative;
    background-image: linear-gradient(${({theme})=>theme.COLORS.LOGO_CANDIE});
    color:blue;
    height: 260px;
    margin-top: 164px;
    margin-bottom: 48px;
    border-radius: 8px;
    gap:8px;
    display:flex;
    flex-direction: column;
    width: 100%;
    
    >h1{
       
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:40px;
    line-height:56px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    margin-left: 597px;
    margin-top: 87px;
    animation-name:  rightleft;
    animation-duration: 4s;
    animation-fill-mode: both;
    
    
    }
    >p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size:16px;
    line-height:22px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
     margin-left:597px;
     animation-name:  leftright;
    animation-duration: 4s;
    }
    @media(max-width:1024px){
        h1{
            font-size: 20px;
            line-height: 14px;
            margin-left:400px
        }
        p{
            font-size: 14px;
            line-height: 14px;
            margin-left: 210px;
        }
    }
    @media(max-width:768px){
        width: 100%;
        padding: 0 20px;
        h1{
            font-size: 14px;
            line-height: 12px;
            margin-left:380px
        }
        p{
            font-size: 12px;
            line-height: 12px;
            margin-left: 210px;
        }
    }
    @media(max-width:615px){
       
        height: 180px;
        margin-top:20px ;
        h1{
            font-size: 14px;
            line-height: 12px;
            margin-left:280px
        }
        p{
            font-size: 12px;
            line-height: 12px;
            margin-left: 150px;
        }
    }
    
    @media(max-width:500px){
        width: 80%;
        h1{
            font-size: 12px;
            line-height: 12px;
            margin-left:150px
        }
        p{
            font-size: 10px;
            line-height: 12px;
            margin-left: 100px;
        }
    }
    @media(max-width:435px){
       width: 60%;
    }
    
}

@keyframes topdown{
    0%{
        opacity: 0;
        transform: translateY(-15px)
    }
    100%{
        opacity: 1;
        transform: translateY(0)
    }
}
@keyframes leftright{
    0%{
        opacity: 0;
        transform: translateX(-500px)
    }
    100%{
        opacity: 1;
        transform: translateX(0)
    }
}
@keyframes rightleft{
    0%{
        opacity: 0;
        transform: translateX(0px)
    }
    100%{
        opacity: 1;
        transform: translateX(-100px)
    }
}

`
export const DishDetails= styled(Link)`


  background:none;
  border: none;
  margin: 0 auto;
  

  >h1{
font-size: 24px;
line-height: 34px;
margin-bottom: 18px;
color: ${({theme})=>theme.COLORS.HEADER_GRAY};
font-family: 'Poppins', sans-serif;
font-style: 'Bold';

}

@media(max-width:765px){
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px;
}

`
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

.carousel{
    display: flex;
    width: 1120px;
    
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
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
}
.Add_Area{
    display: flex;
  width: 208px;
  justify-content: center;
  margin:17px 46px 36px 46px;
  
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
  height: 18px;
  color: ${({theme})=>theme.COLORS.WHITE};
  }

  }
  >h3{

  color: ${({theme})=>theme.COLORS.GREY_INPUT};

 }
  
}
}
.add_dish{
    margin-bottom: 50px;
    padding:15px;
    height: 90px;
    border-radius: 50%;
    border:5px solid blue;
    background:none;
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
  transform: scale(1.2);
  transition: all 1s;
  filter: brightness(1.5);
  background-color:#1b1b1b;
}



>img{
    width:176px;
    height:176px;
    border-radius:50%;
    margin:56px 62px 16px;
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
  
}
>h2{
line-height: 51px;
font-size: 32px;
color: ${({theme})=>theme.COLORS.GREEN_MONEY};
font-family: 'Roboto', sans-serif;
font-weight: 400;
}

}

>img{
   position: absolute;
    top:18px;
    left: 70px;
    animation-name:  topdown;
    animation-duration: 4s;
   
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

`
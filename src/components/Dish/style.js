import styled from "styled-components";
import { Link } from "react-router-dom";
export const DishWrapper= styled.div`
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

export const AddArea= styled.div`

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


`


import styled from "styled-components";

export const SectionWrapper= styled.section`
width: 100%;
grid-area: content;
margin-top: 35px;

>h1{
   
    margin-bottom: 35px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:32px;
    line-height:45px;
}
>h3{
   margin-top: 50px;
   margin-bottom: 280px;
   color:${({theme})=>theme.COLORS.HEADER_GRAY};
   font-family: 'Poppins', sans-serif;
   font-weight:500;
   font-size:26px;
   line-height:20px;
}





`
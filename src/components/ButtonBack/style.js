import { Link } from "react-router-dom";
import styled from "styled-components";



export const BackWrapper= styled(Link)`

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

import styled from "styled-components";


export const OrderWrapper= styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-areas: "header" "content" "footer";
grid-template-rows: 104px auto 77px; ;

`
export const Content= styled.div`
width:100%;
grid-area: content;
padding: 0px 116px;
margin-bottom: 30px;

`
import styled from "styled-components";

export const PaymentWrapper= styled.section`
grid-area: content;
display: flex;
width: 100%;
padding:0px 116px 0 116px;
justify-content: space-between;
margin-bottom:100%;

@media(max-width:768px){
    justify-content: center;
    gap:10px;
    display: flex;
    flex-direction: column;
}
@media(max-width:425px){
    width: 300px;
    padding: 0 20px;
}
`
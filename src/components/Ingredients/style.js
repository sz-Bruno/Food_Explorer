import styled from "styled-components";


export const IngredientsWrapper= styled.div`
align-items: center;
justify-content: center;
gap:3px;

img{
    width: 55px;
}

p{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    font-size:18px;
    line-height:25px;
    color:${({theme})=>theme.COLORS.HEADER_GRAY};
}
`
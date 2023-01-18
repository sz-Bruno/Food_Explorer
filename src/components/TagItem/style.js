import styled from "styled-components";

export const TagWrapper= styled.div`
width: 118px;
height:32px;
background-color: ${({theme,isNew})=> isNew? 'transparent':theme.COLORS.TAG_COLOR};
margin: 7px 0px 7px 4px;
border-radius: 8px;
padding: 6.5px 10px;
display: flex;
gap:8px;
border: ${({theme,isNew})=> isNew? `2px dashed ${theme.COLORS.TAG_COLOR}`:'none'};



>input{
width: 100%;
background-color: transparent;
border: none;
outline:none;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size:16px;
line-height:19px;
color:${({theme})=>theme.COLORS.WHITE};
}
>button{
    
    background: none;
    border: none;
    color:${({theme,isNew})=>isNew? 'green':theme.COLORS.LIGHT_RED}
}
`
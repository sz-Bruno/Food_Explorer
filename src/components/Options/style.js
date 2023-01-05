import styled from "styled-components";

export const OptionsWrapper= styled.div`
width:   1120px;
position: relative;

>div{
width: 100%;
display: flex;

overflow-x: scroll;
::-webkit-scrollbar{
    display:none;
}

}




`
export const LeftBtn= styled.button`
    background: linear-gradient(rgba(0, 10, 15, 0.27),rgba(0, 10, 15, 1));
    border:none;
    position: absolute;
    width:116px;
    height: 448px;

`
export const RightBtn= styled.button`

    background: linear-gradient(rgba(0, 10, 15, 0.27),rgba(0, 10, 15, 1));
    border:none;
    position:absolute;
    width:116px;
    height: 448px;
    top:0px;
    right: 0px;
  
    

`
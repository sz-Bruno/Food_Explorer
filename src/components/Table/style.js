import styled from "styled-components";



export const TableWrapper= styled.table`
    width: 100%;
    border: 1px solid ${({theme})=>theme.COLORS.BORDER};
    border-collapse: collapse;

    th{
    padding: 21px 24px 21px 24px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size:14px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.WHITE};
    border: 1px solid ${({theme})=>theme.COLORS.BORDER};
      
   
    
    }
    
    
    
 td{
    padding: 21px 24px 21px 24px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size:14px;
    font-weight: 700;
    color:${({theme})=>theme.COLORS.GREY_INPUT};
    border: 1px solid ${({theme})=>theme.COLORS.BORDER};
    

  }

select{

  padding: 16px 24px 16px 24px;
  
  background: none;
  color:${({theme})=>theme.COLORS.WHITE};
  font-family: 'Roboto', sans-serif;
  font-size:14px;
  font-weight: 700;
  border-radius:5px;
 &:hover{
  background-color: ${({theme})=>theme.COLORS.GREY_INPUT};
  color:black
 }
}
option{
  font-family: 'Roboto', sans-serif;
  font-size:14px;
  font-weight: 700;
  &:hover{
  background: ${({theme})=>theme.COLORS.GREY_INPUT};
  color:white
 }
}

`
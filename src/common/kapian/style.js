import styled from 'styled-components'
export const PaiOfKapian=styled.div`
width:calc(100vw*.8);
margin:10px 10%; 
padding-top:calc(100vw);
height:calc(100vw*1.2);
border-radius:8px;
box-sizing: border-box;
font-size:10px;
color:#262626;
box-shadow:0 2px 4px rgba(0,0,0,.4);
background-image:url(${props => props.imgsrc});
background-size:100% 300px;
background-repeat:no-repeat;
`
export const BottomPaiOfKapian=styled.div`
display:flex;
justify-content: space-between;
margin:0px 10px;
.leftpart{
    display:flex;
    align-self: center;
    height:32px;
    line-height:32px;
    text-align:left;
}
.rightpart{
    display:flex;
    flex-direction:column; 
    align-self: center;
    width:50%;
    text-align:right;
}
`
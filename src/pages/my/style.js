import styled from "styled-components"
//import logoPic from '../../static/logo.png'

export const ImgXiguanItemInList=styled.li`
display:inline-block;
width:33%;
text-align:center;
padding:10px;
box-sizing: border-box;
text-decoration:none;
color:#262626;
&.item{
    background-color:#00ddd3;
    margin:10px 0;
    border:1px solid @000;
    border-radius:2px;
}
&:nth-child(2){
    background-color:#0000d3;
}
div:nth-child(1){
        display:flex;
        align-items:center;
        img{
            margin-right:4px;
        }
        div{text-align:left;}
}
div:nth-child(2){
    text-align:right;
    flex-shrink:0
}
}
`
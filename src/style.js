import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}	
.App>.bottom_app{
	position:fixed;
	display: flex;
	justify-content:space-around;
	width:100%;
	bottom:0;
	line-height:22px;
	border-top:1px solid #e6e6e6;
	box-shadow:rgba(0, 0, 0, 0.4) 2px 2px 8px;
}
.App{
	font-size:14px;
}
.App>.bottom_app>li a{
	display:flex;
	color:#262626;
	font-size:12px;
	text-decoration:none;
	flex-direction: column;
	text-align:center;
	margin:8px auto;
}

`
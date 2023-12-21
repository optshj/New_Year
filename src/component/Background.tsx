import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
	position:absolute;
	width:500px;
	height:100%;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	background-color : white;
	box-shadow: 1px 1px 2px 6px #bebebe;
	border-radius:10px;
`

function Background() {
	return(
		<Container>
		</Container>
	)
}
export default Background;
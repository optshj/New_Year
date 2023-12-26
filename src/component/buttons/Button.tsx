import React from 'react';
import styled from 'styled-components'

interface ButtonProps{
	color:string;
	children:React.ReactNode;
}

const Btn = styled.div<ButtonProps>`
	border:1px solid ${props=>props.color};
	background-color: ${props=>props.color};
	border-radius:5px;
	padding: 5px 10px;
	cursor:pointer;
`

function Button({children,color}:ButtonProps){
	
	return(
		<Btn color={color}>{children}</Btn>
	)
}

export default Button;
import React from 'react';
import styled from 'styled-components'
import { IoChevronBackOutline } from "react-icons/io5";

interface ButtonProps{
	color:string;
	children:React.ReactNode;
}

//일반적인 버튼 모양(색깔 지정 가능)
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

export {Button};


//뒤로가기 버튼
const BackButton = styled.div`
	font-size:30px;
	cursor:pointer;
	position:absolute;
`

function Back(){

	return(
		<>
			<BackButton>
				<IoChevronBackOutline/>
			</BackButton>
		</>
	)
}


export {Back};
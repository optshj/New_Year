import React from 'react';
import styled from 'styled-components'
import Background from './Background';

const Messages = styled.div`
	position:absolute;
	left:50%;
	top:30%;
	transform:translate(-50%,50%);
	font-size:24px;
`
const Share = styled.div`
	position:absolute;
	left:50%;
	top:60%;
	transform:translate(-50%,50%);
	border:1px solid #FEE500;
	background-color: #FEE500;
	border-radius:5px;
	padding: 5px 10px;
`
function Message(){
	return(
		<>
			<Background/>
			<Messages>새해 복 많이 받으세요 etc...</Messages>
			<Share>다른친구에게 축하하기</Share>
		</>
	)
}


export default Message;
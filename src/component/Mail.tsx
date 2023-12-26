import React,{ useState } from 'react';
import styled,{keyframes} from 'styled-components'

import {ReactComponent as Mailimg} from '../assets/img/mail.svg';

import Message from './Message';
import Back from './buttons/Back';

const Background = styled.div`
	position:relative;
	width:600px;
	height:100vh;
	display: flex;
  	align-items: center;
	margin:0 auto;
	background-color : white;
	box-shadow: 1px 1px 2px 6px #bebebe;
	border-radius:10px;
`

const upDown = keyframes`
	0%{
		margin-top: 0px;
	}
	50%{
		margin-top: 40px;
	}
	100%{
		margin-top: 0px;
	}
`
const Text = styled.div`
	position:absolute;
	top:25%;
	left:15%;
	font-size:32px;
	z-index:1;
	
`
const MailBox = styled.div`
	animation: ${upDown} 2s ease-in-out infinite;
	width:500px;
	height:auto;
	position:absolute;
	left:50%;
	transform:translate(-50%,-50%);
	top:50%;
	z-index:0;
	cursor:pointer;
`
const BackButton = styled.div`
	position:absolute;
	top:1%;
	left:1%;
`

function Mail(){
	const [open,setOpen] = useState(true);
	const onMessage = () => {
		setOpen(!open);
	}
	return(
		<>
			<Background>
			{open?
			<>
				<Text>신년 편지가 도착했어요!</Text>
				<MailBox onClick={onMessage}>
					<Mailimg/>
				</MailBox>
			</>
			:
			<>
				<BackButton onClick={onMessage}>
					<Back/>
				</BackButton>
				<Message/>
			 	
			</>
			}
			</Background>
		</>
	)
}

export default Mail;
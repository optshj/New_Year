import React from 'react';
import styled from 'styled-components'
import {ReactComponent as Mailimg} from '../assets/img/mail.svg';
import Background from './Background';
import { useNavigate } from "react-router-dom";


const Text = styled.div`
	position:absolute;
	top:25%;
	left:40%;
	font-size:32px;
	z-index:1;
	
`
const MailBox = styled.div`
	width:500px;
	height:auto;
	position:absolute;
	left:50%;
	transform:translate(-50%,-50%);
	top:50%;
	z-index:0;
	cursor:pointer;
`
function Mail(){
	const navigate = useNavigate();
	const onMail = () => {
		navigate("/message");
	}
	return(
		<>
			<Background/>
			<Text>신년 편지가 도착했어용!</Text>
			<MailBox onClick={onMail}>
				<Mailimg/>
			</MailBox>
		</>
	)
}

export default Mail;
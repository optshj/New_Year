import React,{useState} from 'react';
import styled from 'styled-components'
import Modal from 'react-modal';

import Button from './buttons/Button';
import Luck from './Luck';

const Messages = styled.div`
	position:absolute;
	left:50%;
	top:30%;
	transform:translate(-50%,50%);
	font-size:24px;
`
const ButtonContainer = styled.div`
	display:flex;
	align-items:center;
	justify-contents:center;
	margin:0 auto;
`
const ButtonGaps = styled.div`
	margin:0 10px;
`

function Message(){
	const [isModalOpen,setIsModalOpen] = useState(false);
	
	const openModal = () => {
		setIsModalOpen(true);
	}
	const closeModal = () => {
		setIsModalOpen(false);
	}
	
	return(
		<>
			<Messages>새해 복 많이 받으세요 etc...</Messages>
			<ButtonContainer>
				<ButtonGaps>
					<Button color='#FEE500'>다른친구에게도 보내기</Button>
				</ButtonGaps>
				<ButtonGaps onClick ={openModal}>
					<Button color='gray'>신년운세 보기</Button>
				</ButtonGaps>
			</ButtonContainer>
			{isModalOpen && (
				<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				style={{
					display:'flex',
					width: '500px',
					height: '500px',
					borderRadius: '5px',
					margin: '0 auto',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			    >
					<Luck/>
				</Modal>
				)
		
		}
		</>
	)
}


export default Message;
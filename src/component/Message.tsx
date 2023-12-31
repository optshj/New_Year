import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { Button, Back } from './buttons/Button';
import Luck from './Luck';
import Comment from './Comment';

// 전달할 메시지 디자인
const Messages = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  font-size: 24px;
  transform: translateX(-50%);
`;

// 버튼 정렬
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

// 각 버튼들의 간격 설정
const ButtonGaps = styled.div`
  margin: 0 10px;
`;

// 모달창 형태
const CustomModal = styled(Modal)`
  width: 500px;
  height: 200px;
  border-radius: 5px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none !important;
  background-color: white;
`;

const BackButton = styled.div`
	position:relative;
	width:30px;
	height:40px;
`;

function Message() {
	console.log(window.Kakao)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
  		setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    //카카오톡으로 공유 메시지 보내는 버튼
    const shareKakao = () => {
		window.Kakao.Share.sendScrap({
		  requestUrl: 'https://developers.kakao.com',
		  templateId: 102392,
		});
	}
	return(
		<>
		  <Messages>
			  <Comment/>
		  </Messages>
		  <ButtonContainer>
			<ButtonGaps onClick={shareKakao}>
			  <Button color='#FEE500'>다른 친구에게도 보내기</Button>
			</ButtonGaps>
			<ButtonGaps onClick={openModal}>
			  <Button color='gray'>신년운세 보기</Button>
			</ButtonGaps>
		  </ButtonContainer>

		  {isModalOpen && (
			<CustomModal
			  isOpen={isModalOpen}
			  onRequestClose={closeModal}
			>
			  <BackButton onClick={closeModal}>
				<Back/>
			  </BackButton>

			  <Luck/>
			</CustomModal>
		  )}
		</>
    );
}

export default Message;
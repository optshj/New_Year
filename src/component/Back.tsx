import React from 'react';
import styled from 'styled-components';
import { IoChevronBackOutline } from "react-icons/io5";

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


export default Back;

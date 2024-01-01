import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
	margin: 0 auto;
	white-space: pre-wrap;
`
function Comment(){
	return(
		<>
			<Message>
				2024 새해가 밝았습니다. <br/> 
			지난 1년을 돌아보면 많은 일들이 있었을텐데, 좋은 일만 기억에 남고 앞으로의 1년을 힘차게 보냈으면 좋겠습니다. <br/> 
			이번 한 해 계획한 일 모두 잘 되셨으면 좋겠습니다.
			</Message>
		</>
	)
}
export default Comment;
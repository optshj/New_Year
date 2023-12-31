export default function init() {
	if (window.Kakao){
		if(!window.Kakao.isInitialized()){
			window.Kakao.init('0b27396d0247505314e4040566aeaec3');
		}
	}
}
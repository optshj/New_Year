import React,{useEffect} from 'react';
import init from './init';

import Mail from './component/Mail';

function App() {
  useEffect(()=>{
	  init();
  },[])
  return (
    <div className="App">
		<Mail/>
    </div>
  );
}

export default App;

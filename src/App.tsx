import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mail from './component/Mail';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Mail/>}/>
				<Route path='/message' element={<Message/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;

//App.js 

import React from 'react'; 
import './App.css'; 
import TempConvert 
	from './TempConverter.js'; 

function App() { 
	return ( 
		<div className="App"> 
			<div className="converter-card"> 
				<h1 className="app-title"> 
					Sıcaklık Dönüştürücü</h1>
				<h3 className="converter-title"> 
					Değerleri Giriniz 
				</h3> 
				<TempConvert /> 
			</div> 
		</div> 
	); 
} 

export default App;

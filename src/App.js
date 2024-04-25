
import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState(''); 
  const [linea2, setLinea2] = useState(''); 
  const [imagen, setImagen] = useState(''); 
      
  const onChaneLine1 = function(evento){
    
    setLinea1(evento.target.value);

  };

  const onChaneLine2 = function(evento){
    
    setLinea2(evento.target.value);

  };

  const onChangeImagen = function(evento){
    
    setImagen(evento.target.value);

  };

  const onChangeExportar = function(evento){
    
   html2canvas(document.querySelector("#meme")).then(canvas =>{
       
        var img = canvas.toDataURL("image/jpg");
        var link = document.createElement('a');
        link.download = 'meme.jpg';
        link.href = img;
        link.click();

   })

  };



  return (
    <div className="App">

      <select onChange={onChangeImagen}> 
        <option value="fire">Casa en Llamas </option>
        <option value="futurama">Futurama</option>
        <option value="history">History Chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br/>

      <input onChange={onChaneLine1} type='text' placeholder='Linea 1'></input><br/>
      <input onChange={onChaneLine2} type='text' placeholder='Linea 2'></input><br/>

      <button onClick={onChangeExportar}>Exportar</button> <br/>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/img/" + imagen + ".jpg"} alt='memes' />
      </div>

    </div>
  );


}

export default App;

import React, {useState} from 'react';
import './App.scss';



function App() {
  const[numb1, setnub1] = useState('');
  const[numb2, setnub2] = useState('');
  const[numb3, setnub3] = useState('');

  function Refresh(e) {
    e.preventDefault()
  }

  function Qoshuv() {
    setnub3(Number(numb1) + Number(numb2));
  }

  function Minus() {
    setnub3(Number(numb1) - Number(numb2));
  }

  function Kopaytma() {
    setnub3(Number(numb1) * Number(numb2));
  }

  function Boluv() {
    setnub3(Number(numb1) / Number(numb2));
  }

  return (
    <>
      <div className='header'>
        <form className='forma' onSubmit={Refresh}>
            <input type="number" onChange={(e) => {setnub1(e.target.value)}} />
            <input type="number" onChange={(e) => {setnub2(e.target.value)}} />
            <div className='Sifr'>
              <button onClick={Qoshuv}>+</button>
              <button onClick={Minus}>-</button>
              <button onClick={Kopaytma}>*</button>
              <button onClick={Boluv}>/</button>
            </div>
            <button className='heding'><i >{numb3}</i></button>
        </form>
      </div>
    </>
  );
}

export default App;

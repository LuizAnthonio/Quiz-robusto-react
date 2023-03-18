

import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Quizcontext } from './context/quiz';



import Welcome from './components/Welcome';
import  Question from './components/Question';
import GameOver from './components/GameOver';
import Selector from './components/Selector';
import CadastrarPergunta from './components/CadastrarPergunta';




import './App.css'




function App() {

  const [quizState, dispatch] = useContext(Quizcontext);

 

 //export const ups = () => ops.map(e => <label> <input type="radio" value={e} name='c'/> {e}</label> )

  useEffect(()=> {
    // embaralhar as perguntas

    dispatch({type: "REORDER_QUESTIONS"});
    
  },[])
  

  return (
    <div className="App">
      <h1> Quiz Robusto </h1>

    
      

     
      {quizState.gameStage === "Cadastrar" && <CadastrarPergunta/>}
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}

    
    </div>
  )
}



export default App

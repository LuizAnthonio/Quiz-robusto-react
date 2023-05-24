

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Quizcontext } from "../context/quiz";
import { TAGS } from "../context/quiz";

import Quiz from "../img/quiz.svg"


import './Welcome.css';



const Welcome = () => {

    const [selected,setSelected] = useState('vazio')

    ///quizState pega os valores e o dispatch muda eles

    const [quizState, dispatch] = useContext(Quizcontext);

    useEffect(() => {
        dispatch({type:"CHANGE_CATEGORIA",payload: selected})
    },[selected])
  

    const teste = selected

    function heandleSelectCategory(e){
        e.preventDefault()

       // alert(selected)
        console.log(selected)

        axios.post('https://quiz-perguntas-node-js.onrender.com', {selected: selected})

        
        
        dispatch({type:"CHANGE_STATE",payload: selected})

        
       
     

    }


   
    //console.log(quizState)

    return(
        <div id="welcome"> 
            <h2>Seja bem-vindo</h2>
            <p>clique no botão abaixo para começar:</p>
            
            <h3>Selecione a categoria</h3>

           <div className="container-selected">

            <form onSubmit={heandleSelectCategory}>

               

            <select className="select" name="tag"  onChange={(e) => setSelected(e.target.value)} >
                <option value={"vazio"}>Tudo</option>
                {TAGS.map((b) => <option key={b} value={b} >{b}</option>  )}
                
            </select>
           

            <button >Iniciar</button>

            </form>

            

          

           </div>
            

      
            <img src={Quiz} alt=''/>
            <button className="botao-cadastro" onClick={e => dispatch({type:"CHANGE_STATE_START"})}>cadastrar perguntas</button>
        </div>
    )
}



export default Welcome;

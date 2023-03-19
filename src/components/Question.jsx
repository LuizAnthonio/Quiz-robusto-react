
import { useContext } from 'react';
import { Quizcontext } from '../context/quiz';
//import { SELECTED } from '../components/Welcome'


import Option from "../components/Option";

import './Question.css';


const Question = () => {

    //const ops = ["javascript","banco do brasil"]
    //{ops.map(e => <label> <input type="radio" value={e} name='c'/> {e}</label> )}
    const [quizState, dispatch] = useContext(Quizcontext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        console.log(option)
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option},
        })
    }


    console.log(quizState)
    //console.log('um teste', SELECTED)

    return(
        <div id='question'>


            
            <h1>Question</h1>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
             <img src={currentQuestion.img} className={`${currentQuestion.img && ("imagem-pergunta")} ${!currentQuestion.img && ("none-image")}`}/>
            <h2>{currentQuestion.question}</h2>
           

           
            <div id='options-container'>
                {currentQuestion.options.map((option) => (
                    <Option 
                    option={option} 
                    key={option}  
                    answer={currentQuestion.answer}
                    selectOption={() => onSelectOption(option)}
                    
                    
                    />
                ))}
               {currentQuestion.tag }
            </div>

            {quizState.answerSelected && (
            
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" , payload:currentQuestion.tag})} >Continuar</button>
        
                
            )}
            
           
        
        
        </div>
    )
}



export default Question;
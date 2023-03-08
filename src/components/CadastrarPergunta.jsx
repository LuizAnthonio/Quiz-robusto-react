import axios from 'axios';

import { useState } from "react";
import { useContext } from "react";
import { TAGS, Quizcontext } from "../context/quiz";


import './CadastrarPergunta.css';

const CadastrarPergunta = () => {

    const [question,setQuestion] = useState('');
    const [op1, setOp1] = useState('');
    const [op2, setOp2] = useState('');
    const [op3, setOp3] = useState('');
    const [op4, setOp4] = useState('');
    const [op5, setOp5] = useState('');
    const [answer,setAnswer] = useState('');
    const [tag,setTag] = useState('')
    const [options,setOptions] = useState([])
    


    
const teste = []


    function handleRegister(e){
    e.preventDefault()


       // teste.push(op1,op2,op3,op4,op5)
        setOptions([op1,op2,op3,op4,op5])


        
        console.log(question,op1,op2,op3,op4,op5,answer,tag)

        console.log('teste ', {
            question:question,
            options:[op1,op2,op3,op4,op5],
            answer:answer,
            tag:tag
        })

        

        

        axios.post('https://quiz-perguntas-node-js.onrender.com/register',{
            question:question,
            options:[op1,op2,op3,op4,op5],
            answer:answer,
            tag:tag
        })


  console.log(answer)


        setQuestion('')
        setOp1('')
        setOp2('')
        setOp3('')
        setOp4('')
        setOp5('')
        setAnswer('')
        setTag('')
        setOptions([])
        
    }

   
    
    const [quizState, dispatch] = useContext(Quizcontext);

   


    return(


        <div className="cadastrar-pergunta">
            <form onSubmit={handleRegister}>
                <div className="inputquestion">
                <span>Question</span>
                

                <textarea className="question" value={question} onChange={(e) => setQuestion(e.target.value)} ></textarea>

                </div>

                <div className="input">
                <input type='radio' value={op1} onChange={(e) => setAnswer(e.target.value)} name='answer' />

                <div className='opcao-container'>
                <span>op1</span>
                <input type='text' name="op1" value={op1} onChange={(e) => setOp1(e.target.value)} required/>

                </div>
                

                </div>

                <div className="input">
                <input type='radio' value={op2} onChange={(e) => setAnswer(e.target.value)} name='answer' />
               
                <div className='opcao-container'>
                <span>op2</span>
                <input type='text' name="op2" value={op2} onChange={(e) => setOp2(e.target.value)} required/>

                
                </div>
                    
                </div>

                <div className="input">

                <input type='radio' value={op3} onChange={(e) => setAnswer(e.target.value)} name='answer' />

                <div className='opcao-container'>

                <span>op3</span>
                <input type='text' name="op3" value={op3} onChange={(e) => setOp3(e.target.value)} required/>

                </div>
              
                </div>
                
                <div className="input">
                <input type='radio' value={op4} onChange={(e) => setAnswer(e.target.value)} name='answer' />
                <div className='opcao-container'>
                <span>op4</span>
                <input type='text' name="op4" value={op4} onChange={(e) => setOp4(e.target.value)} required/>

                </div>
               
                </div>

                <div className="input">
                <input type='radio' value={op5} onChange={(e) => setAnswer(e.target.value)} name='answer' />
                <div className='opcao-container'>
                <span>op5</span>
                <input type='text' name="op5" value={op5} onChange={(e) => setOp5(e.target.value)} required/>

                </div>
               
                </div>
               
                <br/>

                <select className="select" name="tag"  onChange={(e) => setTag(e.target.value)} required>
                    <option></option>
                   {TAGS.map(e =>  <option key={e} value={e}>{e}</option>)}
                   
                </select>
                <br/>
                <button>Cadastrar</button>
                <br/>

            </form>
            <button onClick={() => dispatch({type:"NEW_GAME"})}>Quiz</button>
        </div>
    )

}


export default CadastrarPergunta;
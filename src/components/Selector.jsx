import { useState } from "react";

import { useContext } from "react";
import { Quizcontext } from "../context/quiz";

import './Selector.css'

const Selector = () => {

    const [valor,setValor] = useState("")

      
  
      const [quizState, dispatch] = useContext(Quizcontext);
    //  

    return(

        <div>
        

            <div className="selector">

                 {ops.map(e => <label> <input type="radio" value={e} name='c' onClick={() => dispatch({type:"SELECT_TAG", payload: e})}/> {e}</label>)}
   
            </div>

                 
                 

          
            
            
        </div>

    )
}

export default Selector;
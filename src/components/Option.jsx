
import { useContext } from "react";
import { Quizcontext } from "../context/quiz";

import "./Option.css"

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(Quizcontext);

    return (

        <div  className={`option ${
            quizState.answerSelected && option === answer ? "correct" : ""
        } ${
            quizState.answerSelected && option !== answer ? "wrong" : ""
        }`} onClick={() => selectOption()}>
            <p>{option}</p>
        </div>

    )

}

export default Option;
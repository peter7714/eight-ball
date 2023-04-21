import React, { useState } from "react";
import Answers from "./Answers";
import './EightBall.css'

const EightBall = () => {
    const [answer, setAnswer] = useState({msg: 'Think of a question', color: 'black'});
    const randAnswer = () => {return Math.floor(Math.random() * Answers.length)}
    return (
        <>
            <h1>Magic Eight Ball!</h1>
            <div onClick={() => setAnswer(Answers[randAnswer()])} id="eight-ball" className={answer.color}>
                <div className="wrapper-eight-ball-answer">
                    <p className="eight-ball-answer">{answer.msg}</p>
                </div>
            </div>
        </>
    )
}

export default EightBall;
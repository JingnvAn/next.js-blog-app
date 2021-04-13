import React from 'react'
import { useState } from 'react'

export default function HookCounter() {
    const initialState = 0;
    const [count, setCount] = useState(initialState)

    const incrementByFive = () => {
        for(let i=0; i<5; i++){
            //if state depends on previous state, use arrow function
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={ () => setCount(initialState)}>reset</button>
            <button onClick={ () => setCount(prevCount => prevCount + 1) }>plus one</button>
            <button onClick={ () => setCount(prevCount => prevCount + 2) }>plus two</button>
            <button onClick={incrementByFive}>plus five</button>
        </div>
    )
}


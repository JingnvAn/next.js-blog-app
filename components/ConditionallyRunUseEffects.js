import React, {useState, useEffect} from 'react'

function ConditionallyRunUseEffects() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect, updating document title")
        document.title = `conditional count: ${count}`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => {setCount(prevCount => prevCount+1)}}>clicke me: {count}</button>
        </div>
    )
}

export default ConditionallyRunUseEffects

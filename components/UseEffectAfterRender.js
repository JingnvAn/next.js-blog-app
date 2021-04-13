import React, {useEffect, useState} from 'react'

function UseEffectAfterRender() {
    const [count, setCount] = useState(0)

    useEffect( () => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => {setCount(prevCount => prevCount + 1 )}}>clicked me {count} times</button>
        </div>
    )
}

export default UseEffectAfterRender


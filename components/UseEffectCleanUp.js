import React, {useState, useEffect} from 'react'
import UseEffectOnlyOnce from './UseEffectOnlyOnce.js'

function UseEffectCleanUp() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display mouse coordinates</button>
            {display && <UseEffectOnlyOnce />}
        </div>
    )
}

export default UseEffectCleanUp

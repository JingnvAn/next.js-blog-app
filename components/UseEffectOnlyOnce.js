import React, {useState, useEffect} from 'react'

function UseEffectOnlyOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // e stands for the 'mousemove' event that's captured on line 16
    const logMouseMovement = e => {
        console.log("logMouseMovement in OnlyOnce called")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', logMouseMovement)

        return () => {
            console.log('component unmounted')
            window.removeEventListener('mousemove', logMouseMovement)
        }
    }, []) 

    // the [] passed as a second param is telling react: 
    // only render this useEffect function once, at when
    // the page loads

    return (
        <div>
            Hooks X - {x}, Y - {y}
        </div>
    )
}

export default UseEffectOnlyOnce

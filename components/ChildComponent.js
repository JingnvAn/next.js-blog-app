import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* jingnu is being passed as a param to greetParent() method in ParentComponent.js */}
            <button onClick={ () => props.greetHandler('Jingnu') } >button defined in ChildComponent</button>
        </div>
    )
}

export default ChildComponent

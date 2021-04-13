import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h2>
                Hello {props.name}, you're {props.age} years old!
            </h2>
            {props.children}
        </div>
    )
}

export default Greet;
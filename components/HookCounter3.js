import React, {useState} from 'react'

function HookCounter3() {
    const [name, setName] = useState({ firstName: '',lastName: '' })
    return (
        <form>
            <input 
                type='text' 
                value={name.firstName}
                // useState's set function doesn't merge the state
                //need to use ... which is the spread operator
                //it reads: copy every from the name object,
                //then just overwrite the firstName property
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input 
                type='text' 
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <p>Your first name is: {name.firstName}, Your last name is: {name.lastName}</p>
        </form>
    )
}

export default HookCounter3

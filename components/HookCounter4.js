import React, {useState} from 'react'

//useState with array

function HookCounter4() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            //spread items (copy everything from prev items)
            //append new info: id and value into the array items
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>add a number</button>
            <ul>
                {
                    items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter4

import React, {useEffect, useState} from 'react'
import axios from 'axios'

function PracticeFetchingData() {
    const [id, setId] = useState(1)
    const [confirmedId, setConfirmedId] = useState(1)
    const [post, setPost] = useState({})

    const handleClick = () => {
        setConfirmedId(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${confirmedId}`)
            .then( (res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [confirmedId])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Go</button>
            <p>{post.title}</p>
        </div>
    )
}

export default PracticeFetchingData

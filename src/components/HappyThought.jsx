import { useState } from 'react'

export const HappyThought = ({ message, id }) => {
const [likeMessage, setLikeMessage] = useState(0)

// POST request and a counter for liking other users' messages
const handleLike = () => {
    fetch(`https://happy-thoughts-api-a9pe.onrender.com/${id}/like`, {
        method: 'post',
    })
    .then(res => res.json)
    setLikeMessage(count => count + 1)
    console.log('Liked!')
}

    return (
        <div id="thought-container">
            <p>{message}</p>
            <div className="like-counter">
            <button 
                className="like-button"
                onClick={handleLike}><img src="like-heart.png" />
            </button>
            <div className="counter">
                x{likeMessage}
            </div>
            </div>
        </div>
    )
}
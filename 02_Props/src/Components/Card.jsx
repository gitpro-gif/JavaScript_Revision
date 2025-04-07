import React from 'react'

const Card = (props) => {
    console.log(props.username);
    
    
  return (
    <div>
        <h1>This is How we can use Props</h1>
        <h2>Buisness detil: {props.username}</h2>
    </div>
  )
}

export default Card
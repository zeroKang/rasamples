import React from 'react'


const box = {
    border: "1px solid white"
}

const Box = (props) =>  { return (
    


    <div style={box}>
        <h3>{props.title}</h3>
        {props.children}
    </div>
)}

export default Box
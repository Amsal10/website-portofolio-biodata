import "../style/Button.css"
import React from 'react'

function Button(props) {
    const classButton = "btn btn-me btn-" + props.warna
    return (
        <a href={props.link} class={classButton}>
            {props.text}</a>
    )
}

export default Button
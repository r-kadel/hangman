import React from 'react';
import './LetterBox.css'

function LetterBox(props) {
    return (
        <div className="letter-box">
            <p className="hidden">{props.content}</p>
        </div>
    )
}

export default LetterBox;
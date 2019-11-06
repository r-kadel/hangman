import React from 'react'
import LetterBox from './LetterBox'

function WordDisplay(props) {
    return props.wordArr.map( (letter, index) => {
                return <LetterBox key={index} content={letter} />              
            })
}

export default WordDisplay;
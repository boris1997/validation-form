import React from 'react'
import Auxilary from '../../../../hoc/Auxilary'

function FormControlLanguageOption(props) {
    console.log(props)
    return (
        <Auxilary>
            <option value={props.language}> {props.language}</option>
        </Auxilary>
    )
}

export default FormControlLanguageOption

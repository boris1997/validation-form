import React from 'react'
import Auxilary from '../../../../hoc/Auxilary'
import classes from './FormControlLanguageOption.module.css'
function FormControlLanguageOption(props) {
    console.log(props)
    return (
        <Auxilary>
            <div onClick={props.setLanguage} className={classes.option} value={props.language}> {props.language}</div>
        </Auxilary >
    )
}

export default FormControlLanguageOption

import React from 'react'
import classes from './CheckConditions.module.css'
const CheckConditions = (props) => {
    return (
        <div className={classes.conditionsControl} >
            <input id='check' className={classes.checkbox} onChange={props.checked} type="checkbox" />
            <label className={classes.checkboxLabel} htmlFor='check'></label>
            <div className={classes.conditionTitle}>Принимаю <a href="#">условия</a>  использования</div>
        </div>
    )
}

export default CheckConditions

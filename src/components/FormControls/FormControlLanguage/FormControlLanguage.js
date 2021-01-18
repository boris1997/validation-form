import React, { useEffect, useMemo } from 'react'
import FormControlLanguageOption from './FormControlLanguageOption/FormControlLanguageOption'
import classes from '../FormControl/FormControl.module.css'
import classesLg from './FormControlLanguage.module.css'

const FormControlLanguage = (props) => {
    let langueges = {
        1: "Русский",
        2: "Английcкий",
        3: "Китайский",
        4: "Испанский"
    }

    console.log(props.dataActive)


    return (
        <div className={[classes.formControl, classesLg.formControl].join(' ')}>
            <label className={classes.formControlLabel} htmlFor="Язык">Язык</label>
            <div onClick={props.showData} className={[classes.formControlInput, classesLg.formControlInput].join(' ')} id="" name="">
                <span className={(props.dataActive.length > 0 || props.language !== 'Язык') && classesLg.success}>{props.language}</span>
                {/*  <option value="Русский">Русский</option>
                <option value="Английкий">Английкий</option>
                <option value="Китайский">Китайский</option>
                <option value="Испанский">Испанский</option> */}
            </div>
            <div className={[classesLg.formControlData, props.dataActive.length > 0 && classesLg.success].join(' ')}>
                {Object.keys(langueges).map(item => <FormControlLanguageOption setLanguage={props.setLanguage} key={item} language={langueges[item]} />)}
            </div>
        </div>
    )
}

export default FormControlLanguage

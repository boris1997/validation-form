import React from 'react'
import FormControlLanguageOption from './FormControlLanguageOption/FormControlLanguageOption'

const FormControlLanguage = (props) => {
    let langueges = {
        1: "Русский",
        2: "Английcкий",
        3: "Китайский",
        4: "Испанский"
    }
    return (
        <div>
            <label htmlFor="Язык">Язык</label>
            <select onChange={props.changed}   id="" name="">
                <option  selected disabled hidden>Язык</option>
                {/*  <option value="Русский">Русский</option>
                <option value="Английкий">Английкий</option>
                <option value="Китайский">Китайский</option>
                <option value="Испанский">Испанский</option> */}
                {Object.keys(langueges).map(item => <FormControlLanguageOption key={item} language={langueges[item]} />)}
            </select>
        </div>
    )
}

export default FormControlLanguage

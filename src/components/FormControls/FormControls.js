import React from 'react'
import CheckConditions from './CheckConditions/CheckConditions'
import Button from '../Ui/Button'
import FormControl from './FormControl/FormControl'
import FormControlLanguage from './FormControlLanguage/FormControlLanguage'
import classes from './FormControls.module.css'

const FormControls = (props) => {

    return (
        <form className={classes.formControls}>
            <FormControl nameInvalid={props.nameInvalid} changed={props.validateName} title='Имя' name='name' placeholder="Введите Ваше имя" />
            <FormControl mailInvalid={props.mailInvalid} changed={props.validateЕmail} title='Еmail' name='email' placeholder="Введите ваш email" />
            <FormControl phoneInvalid={props.phoneInvalid} changed={props.validatePhone} title='Номер телефона' name='phone' placeholder="Введите номер телефона" />
            <FormControlLanguage setLanguage={props.setLanguage} language={props.language} dataActive={props.dataActive} showData={props.showData} />
            <CheckConditions checked={props.checked} />
            <Button btnStatus={props.btnStatus} />
        </form>
    )
}

export default FormControls



import React from 'react'
import classes from './FormHeader.module.css'

const FormHeader = () => {
    return (
        <div className={classes.header} >
            <h1 className={classes.title}>Регистрация</h1>
            <div className={classes.login}>
                <p>Уже есть аккаунт?</p>
                <a className={classes.loginLink} href='#'>Войти</a>
            </div>
        </div>
    )
}

export default FormHeader

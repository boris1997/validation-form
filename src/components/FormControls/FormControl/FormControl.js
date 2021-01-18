import classes from './FormControl.module.css'

function FormControl(props) {
    return (
        <div className={classes.formControl}>
            <label className={classes.formControlLabel}>
                {props.title}
            </label>
            <input onChange={props.changed} type="text" name={props.name} required className={classes.formControlInput} id="sername" placeholder={props.placeholder} />
            <div className={[classes.formControlInvalid, (props.nameInvalid || props.mailInvalid || props.phoneInvalid) === 'active' && classes.active].join(' ')}>
                Введено не корректное значение
              </div>
        </div>
    )
}

export default FormControl

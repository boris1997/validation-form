/* import classes from '*.module.css' */
/* import classes from '*.module.css' */
import classes from './FormControl.module.css'

function FormControl(props) {
    console.log(props)
    return (
        <div className="feedback__form-group">
            <label className="feedback__name">
                {props.title}
            </label>
            <input onChange={props.changed} type="text" name={props.name} required className="feedback__form-control" id="sername" placeholder={props.placeholder} />
            <div className={[classes.feedback__invalid, (props.nameInvalid || props.mailInvalid || props.phoneInvalid) === 'active' && classes.active].join(' ')}>
                Введено не корректное значение
              </div>
        </div>
    )
}

export default FormControl

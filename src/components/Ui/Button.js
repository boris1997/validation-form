import Auxilary from '../../hoc/Auxilary'
import classes from './Button.module.css'
const Button = (props) => {
    return (
        <Auxilary>
            <button className={classes.formButton} disabled={props.btnStatus} >Зарегистрироваться</button>
        </Auxilary>
    )
}

export default Button

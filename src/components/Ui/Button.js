import Auxilary from '../../hoc/Auxilary'

const Button = (props) => {
    console.log(props.btnStatus)
    return (
        <Auxilary>
            <button disabled={props.btnStatus} >Зарегистрироваться</button>
        </Auxilary>
    )
}

export default Button

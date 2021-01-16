import React from 'react'
import CheckConditions from './CheckConditions/CheckConditions'
import Button from '../Ui/Button'
import FormControl from './FormControl/FormControl'
import FormControlLanguage from './FormControlLanguage/FormControlLanguage'

const FormControls = (props) => {

    console.log(props)

    return (
        <form className="feedback__item portfolio__item">
            <FormControl nameInvalid={props.nameInvalid} changed={props.validateName} title='Имя' name='name' placeholder="Введите Ваше имя" />
            <FormControl mailInvalid={props.mailInvalid} changed={props.validateЕmail} title='Еmail' name='email' placeholder="Введите ваш email" />
            <FormControl phoneInvalid={props.phoneInvalid} changed={props.validatePhone} title='Номер телефона' name='phone' placeholder="Введите номер телефона" />
            <FormControlLanguage changed={props.changed} />
            <CheckConditions />
            <Button btnStatus={props.btnStatus}/>
            {/* <form className="feedback__form-group">
                <label className="feedback__name">
                    фамилия
              </label>
                <input type="text" name="sername" required className="feedback__form-control" id="sername" placeholder="" />
                <div className="feedback__invalid">
                    Введите фамилию корректно
              </div>
            </form>
            <form className="feedback__form-group">
                <label for="name" className="feedback__name">
                    имя
              </label>
                <input type="text" name="name" required className="feedback__form-control" id="name" placeholder="" />
                <div className="feedback__invalid">
                    Введите имя корректно
              </div>
            </form>
            <form className="feedback__form-group">
                <label for="sername" className="feedback__name">
                    номер телефона
              </label>
                <input type="text" name="phone" required="" className="feedback__form-control" id="phone"
                    placeholder="89998887766" />
                <div className="feedback__invalid">
                    Введите номер телефона корректно
              </div>
            </form>
            <form className="feedback__form-group">
                <input type="hidden" name="project_name" value="Dezinfection" />
                <input type="hidden" name="admin_email" value="antiklop77@gmail.com" />
                <input type="hidden" name="form_subject" value="Заявка" />
                <input type="submit" value="Отправить" className="feedback__form-btn" />
            </form> */}

        </form>
    )
}

export default FormControls



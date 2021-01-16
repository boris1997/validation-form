import React, { useEffect, useState } from 'react'
import FormHeader from '../components/FormHeader/FormHeader'
import FormControls from '../components/FormControls/FormControls'
/* import Auxilary from '../hoc/Auxilary'
import CheckConditions from '../components/CheckConditions/CheckConditions' */
/* import Button from '../components/Ui/Button' */

const Form = () => {
    const [btnStatus, setBtnStatus] = useState(true);
    const [mailInvalid, setMailInvalid] = useState('');
    const [phoneInvalid, setPhoneInvalid] = useState('');
    const [nameInvalid, setNameInvalid] = useState('');
    const [language, setLanguage] = useState('')

    const validateName = (e) => {
        const re = /^[a-zA-Zа-яА-Я-\s]{0,16}$/;
        const name = e.target.value
        !re.test(name) ? setNameInvalid('active') : setNameInvalid('success')
        console.log(!re.test(name))
        console.log(name)
        console.log(nameInvalid)
    }


    const validateЕmail = (e) => {
        const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        const name = e.target.value;
        !re.test(name) ? setMailInvalid('active') : setMailInvalid('success');
        console.log(!re.test(name))
        /* return name */
    }
    const validatePhone = (e) => {
        const re = /^(?=(?:\D*\d){11}\+*\)*\(*-*$).{11,25}$/

        const name = e.target.value;
        !re.test(name) ? setPhoneInvalid('active') : setPhoneInvalid('success');
    }

    const validateLanguage = () => {
        setLanguage('success')
        console.log('object')
    }

    useEffect(() => {
        let successValidaion = [];
        successValidaion.push(mailInvalid, nameInvalid, phoneInvalid, language)
        successValidaion.every(item => item === 'success') ? setBtnStatus(false) : setBtnStatus(true)
        console.log(successValidaion)
    }, [mailInvalid, nameInvalid, phoneInvalid, language])
    return (
        <div className='Form' >
            <FormHeader />
            <FormControls
                validateName={validateName}
                validateЕmail={validateЕmail}
                validatePhone={validatePhone}
                nameInvalid={nameInvalid}
                phoneInvalid={phoneInvalid}
                mailInvalid={mailInvalid}
                btnStatus={btnStatus}
                changed={validateLanguage}
            />
        </div>
    )
}

export default Form

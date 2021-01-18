import { useEffect, useState } from 'react';
import './App.css';
import FormControls from './components/FormControls/FormControls';
import FormHeader from './components/FormHeader/FormHeader';
import classes from '../src/components/Form.module.css'
const App = () => {
  const [data, setData] = useState('')
  const [btnStatus, setBtnStatus] = useState(true);
  const [mailInvalid, setMailInvalid] = useState('');
  const [phoneInvalid, setPhoneInvalid] = useState('');
  const [nameInvalid, setNameInvalid] = useState('');
  const [language, setLanguage] = useState('Язык')
  const [dataActive, setDataActive] = useState('')
  const [checkBox, setCheckBox] = useState('')

  const validateName = (e) => {
    const re = /^[a-zA-Zа-яА-Я-\s]{0,16}$/;
    const name = e.target.value;
    (!re.test(name) && name.length > 0) ? setNameInvalid('active') : name.length > 0 ? setNameInvalid('success') : setNameInvalid('');
  }


  const validateЕmail = (e) => {
    const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    const name = e.target.value;
    (!re.test(name) && name.length > 0) ? setMailInvalid('active') : name.length > 0 ? setMailInvalid('success') : setMailInvalid('');
    /* return name */
  }
  const validatePhone = (e) => {
    const re = /^(?=(?:\D*\d){11}\+*\)*\(*-*$).{11,25}$/

    const name = e.target.value;
    (!re.test(name) && name.length > 0) ? setPhoneInvalid('active') : name.length > 0 ? setPhoneInvalid('success') : setPhoneInvalid('');
  }

  const showData = (e) => {
    console.log(e.target)
    dataActive.length === 0 && setDataActive('success')
  }

  const validateCheckBox = (e) => {
    checkBox === '' ? setCheckBox('success') : setCheckBox('')
  }

  const changeLanguage = (e) => {
    setLanguage(e.target.textContent)
    setData('success')
  }

  const removeData = (e) => {
    dataActive === 'success' && setDataActive('')
  }


  useEffect(() => {
    let successValidaion = [];
    successValidaion.push(mailInvalid, nameInvalid, phoneInvalid, data, checkBox)
    successValidaion.every(item => item === 'success') ? setBtnStatus(false) : setBtnStatus(true)
  }, [mailInvalid, nameInvalid, phoneInvalid, data, checkBox])
  return (
    <div onClick={removeData} className="App">
      <div className={classes.form} >
        <FormHeader />
        <FormControls
          validateName={validateName}
          validateЕmail={validateЕmail}
          validatePhone={validatePhone}
          nameInvalid={nameInvalid}
          phoneInvalid={phoneInvalid}
          mailInvalid={mailInvalid}
          setLanguage={changeLanguage}
          language={language}
          btnStatus={btnStatus}
          dataActive={dataActive}
          showData={showData}
          checked={validateCheckBox}
        />
      </div>
    </div>
  );
}

export default App;

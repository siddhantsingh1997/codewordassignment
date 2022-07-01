import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onInputChange = (value) => {
    setPasswordValue(value);
  }

  const checkPassword = () => {
    if (!(/[^A-Za-z0-9]/.test(passwordValue))) {
      setPasswordError(true);
    }

    else if (!(/[0-9]/.test(passwordValue))) {
      setPasswordError(true);
    }
    else if (!(/[A-Za-z]/.test(passwordValue))) {
      setPasswordError(true);
    }
    else if(passwordValue.length<6){
      setPasswordError(true);
    }
    else {
      setPasswordError(false);
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.passwordWrapper}> 
          <input type="password" on onChange={(e)=>{
            onInputChange(e.target.value)
          }} />
          <div className={styles.passwordButton} onClick={()=>{
              checkPassword() 
          }}>Click me</div>
        </div> 
        {passwordError?<div className={styles.errorText}>Password length should be greater  than 6, should inclure digit and letter</div>:""}
    </div>
  )
}

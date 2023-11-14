import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';

export default function Login() {

    const value = useContext(AppContext);
    const font = value.fontSize;

  return (
    <div>

<form className='registerForm'>
            <label for="username" className='registerLabel' style={{fontSize: font}}>Login:</label>
            <input type="text" id="username" name="username" required />

            <label for="password" className='registerLabel' style={{fontSize: font}}>Hasło:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Zaloguj się</button>
        </form>
    </div>
  )
}

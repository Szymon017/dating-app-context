import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';

export default function RegisterForm() {

    const value = useContext(AppContext);
    const font = value.fontSize;

    return (
        <>
        <form className='registerForm'>
            <label for="firstName" className='registerLabel' style={{fontSize: font}}>Imię:</label>
            <input type="text" id="firstName" name="firstName" required></input>
            <label for="lastName" className='registerLabel' style={{fontSize: font}}>Nazwisko:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label for="username" className='registerLabel' style={{fontSize: font}}>Login:</label>
            <input type="text" id="username" name="username" required />

            <label for="password" className='registerLabel' style={{fontSize: font}}>Hasło:</label>
            <input type="password" id="password" name="password" required />

            <label for="email" className='registerLabel' style={{fontSize: font}}>Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="confirmEmail" className='registerLabel' style={{fontSize: font}}>Potwierdź Email:</label>
            <input type="email" id="confirmEmail" name="confirmEmail" required />

            <label for="confirmPassword" className='registerLabel' style={{fontSize: font}}>Potwierdź Hasło:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />

            <label for="acceptTerms" className='registerLabel' style={{fontSize: font}}>Zaakceptuj regulamin:</label>
            <input type="checkbox" id="acceptTerms" name="acceptTerms" required />

            <button type="submit" style={{fontSize: font}}>Zarejestruj się</button>
            
        </form>
 
        </>
    )
}

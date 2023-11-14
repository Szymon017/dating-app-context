import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';
export default function () {

    const value = useContext(AppContext);
    const font = value.fontSize;

    const redirectToAnotherPage = () => {
        window.location.href = 'http://localhost:3000/AcceptNewPerson';
      };
    return (
        
        <div className='findPartner'>
            <div class="search-container">
                <h2 style={{ color: 'pink', fontSize:font }} >Wyszukaj Partnera</h2>
                <form>
                    <label for="gender" style={{fontSize: font}}>Płeć:</label>
                    <input type="text" id="gender" name="gender" required />

                    <label for="age" style={{fontSize: font}}>Wiek:</label>
                    <input type="text" id="age" name="age" required />

                    <label for="distance" style={{fontSize: font}}>Dystans:</label>
                    <div class="distance-inputs">
                        <input type="text" id="distanceFrom" name="distanceFrom" placeholder="Od" required />
                        <input type="text" id="distanceTo" name="distanceTo" placeholder="Do" required />
                    </div>

                    <button type="submit" onClick={redirectToAnotherPage} style={{fontSize: font}}>Szukaj</button>
                </form>
            </div>
        </div>
    )
}

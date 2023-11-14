import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';

export default function () {

    const value = useContext(AppContext);
    const font = value.fontSize;
    
    const redirectToAnotherPage = () => {
        window.location.href = 'http://localhost:3000/strangerProfile';
      };
    return (
        <div className='newPerson'>
            <div class="button-container">
                <button class="reject-button">NIE</button>
                <img src="https://thispersondoesnotexist.com/" alt="User Image" class="user-image" />
                <button class="accept-button" onClick={redirectToAnotherPage}>TAK</button>
            </div>

            <div class="user-details">
                <div class="user-name"  style={{fontSize: font}}>Klaudia Nowak</div>
                <div class="user-age"  style={{fontSize: font}}>Wiek: 25</div>
                <div class="user-location"  style={{fontSize: font}}>Miejscowość: Warszawa</div>
            </div>
        </div>
    )
}

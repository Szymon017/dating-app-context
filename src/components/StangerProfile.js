import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';

export default function StangerProfile() {

    const value = useContext(AppContext);
    const font = value.fontSize;

    return (
        <div className='strangerProfile'>
            <div class="user-profile">
                <div class="left-column">
                    <img src="http://www.thispersondoesnotexist.com" alt="User Image" class="user-image" />

                    <div class="decision-buttons">
                        <button>TAK</button>
                        <button>NIE</button>
                    </div>
                </div>

                <div class="right-column">
                    <div class="profile-details">
                        <div><strong>Imię Nazwisko:</strong> Barbara nowak</div>
                        <div><strong>Lokalizacja:</strong> Warszawa</div>
                        <div><strong>Czy ma dzieci:</strong> Tak</div>
                        <div><strong>Wiek:</strong> 25 lat</div>
                    </div>

                    <div class="user-description">
                        <strong>Opis:</strong>
                        Hej, jeżeli tu trafiłeś to najwidoczniej zainteresowała Cię moja uroda. Dbam o siebie i ćwiczę regularnie. Jeżeli jesteś leniem albo jesteś biedny to nie masz co podbijać.
                        Napisz do innej i nie marnuj mojego czasu. Całuski Baśka! :*
                    </div>

                    <div class="user-interests">
                        <strong>Zainteresowania:</strong>
                        Sport, Muzyka, Podróże
                    </div>
                </div>
            </div>

        </div>
    )
}

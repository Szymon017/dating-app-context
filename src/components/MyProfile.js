import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App.js';

export default function () {

    const value = useContext(AppContext);
    const font = value.fontSize;

    const [butto, setButto] = useState(true);
    return (
        <div className='myProfile'>

            <div class="user-profile">
                <div class="left-column">
                    <div class="profile-header" style={{fontSize: font}}>Twój Profil</div>
                    <img src="http://www.thispersondoesnotexist.com" alt="User Image" class="user-image" />
                    <div class="user-details">
                        <div style={{fontSize: font}}>Imię: Tomek</div>
                        <div style={{fontSize: font}}>Nazwisko: Janik</div>
                        <div style={{fontSize: font}}>Lokalizacja: Warszawa</div>
                        <div style={{fontSize: font}}>Czy ma dzieci: Nie</div>
                        <div style={{fontSize: font}}>Wiek: 15 lat</div>
                    </div>
                </div>

                <div class="right-column">
                   
                    <div class="about-me-header" style={{fontSize: font}}>O MNIE</div>
                    <div class="user-description" >
                        <p>Cześć! Nazywam się Tomek i mam 15 lat. Jestem pełen energii nastolatek z pasją do odkrywania świata i poznawania nowych rzeczy. Moje życie jest jak otwarta księga, a każdy dzień to nowa przygoda.

                            Jako nastolatek, uwielbiam spędzać czas na rozwijaniu swoich zainteresowań. Kiedy nie uczę się nowych rzeczy w szkole, często eksploruję świat książek, gier komputerowych czy filmów. Fascynuje mnie technologia i wszystko, co z nią związane.

                            Sport także odgrywa ważną rolę w moim życiu. Uwielbiam aktywność fizyczną, a moje ulubione dyscypliny to piłka nożna i koszykówka. Dzięki nim uczę się teamworku, zdrowej rywalizacji i utrzymuję dobrą kondycję.

                            Mam ogromne zamiłowanie do podróży, nawet jeśli są to tylko wirtualne podróże przez świat internetu. Chciałbym kiedyś odwiedzić różne zakątki świata i poznać różnorodność kultur.

                            Jestem otwarty na nowe znajomości i przyjaźnie, więc jeśli podobają Ci się moje zainteresowania lub po prostu chciałbyś porozmawiać, śmiało się odezwij!
                        </p>
                    </div>

                    <div class="gallery-header" style={{fontSize: font}}>MOJE ZDJĘCIA</div>
                    <div class="photo-gallery">
                        <img src="http://www.thispersondoesnotexist.com" alt="Photo 1" width={"120px"} height={"120px"} />
                        <img src="http://www.thispersondoesnotexist.com" alt="Photo 2" width={"120px"} height={"120px"} />
                        <img src="http://www.thispersondoesnotexist.com" alt="Photo 3" width={"120px"} height={"120px"} />

                    </div>

                    <div class="interests-header" style={{fontSize: font}}>MOJE ZAINTERESOWANIA</div>
                    <div class="interests-gallery">
                        <div style={{fontSize: font}}>Komputer</div>
                        <div style={{fontSize: font}}>Jedzenie</div>
                        <div style={{fontSize: font}}>Filmy</div>
                        {butto ?
                        (<div style={{ marginLeft: "80%", cursor: "pointer"}} onClick={() => { setButto(!butto) }}>Edytuj konto</div>) : (
                            <>
                                <div style={{ marginLeft: "80%", cursor: "pointer"}} onClick={() => { setButto(!butto) }}>Usuń profil</div>
                                <div style={{ marginLeft: "80%", cursor: "pointer"}} onClick={() => { setButto(!butto) }}>Zapisz Profil</div></>
                        )
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}

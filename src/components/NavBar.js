import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App.js';

export default function NavBar() {

    const value = useContext(AppContext);
  const font = value.fontSize;
  const updateFontSize = value.updateFontSize;

  const increaseFontSize = (e) => {
    e.preventDefault();

    updateFontSize((currentFontSize) => (parseInt(currentFontSize) + 5 + 'px'));
  };

  const decreaseFontSize = (e) => {
    e.preventDefault();

    updateFontSize((currentFontSize) => (parseInt(currentFontSize) - 5 + 'px'));
  };


    return (
        <>
            <div className="navBarContainer">
                <div className="navBarLeft">
                    <ul>
                        <li><a href="FindPartner" style={{ fontSize: font }}>Szukaj osób</a></li>
                        <li><a href="Chat" style={{ fontSize: font }}>Czat</a></li>
                        <li><a href="MyProfile" style={{ fontSize: font }}>Mój profil</a></li>
                        <li><a href="contact" style={{ fontSize: font }}>Kontakt</a></li>
                        <li><a href="regulamin" style={{ fontSize: font }}>Regulamin</a></li>

                    </ul>
                </div>
                <div className="navBarRight">
                    <ul>
                        <li><a href="" style={{ fontSize: font }}>
                            <button onClick={decreaseFontSize}>Pomniejsz</button>
                            <button onClick={increaseFontSize}>Powiększ</button>
                        </a></li>
                        <li><a href="Logout" style={{ fontSize: font }}>Wyloguj</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
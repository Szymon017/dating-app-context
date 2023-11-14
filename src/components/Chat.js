import React, {useContext} from 'react'
import { AppContext } from '../App.js';

export default function Chat() {

    const value = useContext(AppContext);
    const font = value.fontSize;
    return (
        <div className='chat'>
   <div class="users-panel">
    <div class="user-item">
      <img src="http://www.thispersondoesnotexist.com" alt="User Image" class="user-image"/>
      <div class="user-info">
        <div class="user-name" style={{fontSize: font}}>Imię Nazwisko</div>
        <div class="user-description" style={{fontSize: font}}>Opis użytkownika</div>
      </div>
    </div>

    <div class="user-item">
      <img src="http://www.thispersondoesnotexist.com" alt="User Image" class="user-image"/>
      <div class="user-info">
        <div class="user-name" style={{fontSize: font}}>Imię Nazwisko</div>
        <div class="user-description" style={{fontSize: font}}>Opis użytkownika</div>
      </div>
    </div>

  </div>

  <div class="chat-container">
    <div class="chat-window">
      <div class="message-list">
        <div class="message" style={{fontSize: font}}>Osoba 1: Cześć!</div>
        <div class="message" style={{fontSize: font}}>Osoba 2: Jak się masz?</div>
      </div>

      <div class="message-input">
        <input type="text" placeholder="Wpisz wiadomość"/>
        <button type="button" style={{fontSize: font}}>Wyślij</button>
      </div>
    </div>
  </div>
        </div>
    )
}

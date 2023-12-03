import React, { useContext, useState } from 'react';
import { AppContext } from '../App.js';

export default function NavBar() {
  const value = useContext(AppContext);
  const font = value.fontSize;
  const updateFontSize = value.updateFontSize;

  const [isOtherExpanded, setOtherExpanded] = useState(false);

  const toggleOther = () => {
    setOtherExpanded((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setOtherExpanded(true);
  };

  const handleMouseLeave = () => {
    setOtherExpanded(false);
  };

  const increaseFontSize = (e) => {
    e.preventDefault();
    updateFontSize((currentFontSize) => parseInt(currentFontSize) + 5 + 'px');
  };

  const decreaseFontSize = (e) => {
    e.preventDefault();
    updateFontSize((currentFontSize) => parseInt(currentFontSize) - 5 + 'px');
  };

  return (
    <>
      <div className={`navBarContainer ${isOtherExpanded ? 'expanded' : ''}`}>
        <div className="navBarLeft">
          <ul>
            <li>
              <a href="FindPartner" style={{ fontSize: font }}>
                Szukaj osób
              </a>
            </li>

            <li>
              <a href="MyProfile" style={{ fontSize: font }}>
                Mój profil
              </a>
            </li>
            <li
              className="other-tab"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" style={{ fontSize: font }} onClick={toggleOther}>
                Inne
              </a>
              {isOtherExpanded && (
                <ul className="subMenu">
                  <li>
                    <a href="regulamin" style={{ fontSize: font }}>
                      Regulamin
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="navBarRight">
          <ul>
            <li>
              <a href="Logout" style={{ fontSize: font }}>
                Wyloguj
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

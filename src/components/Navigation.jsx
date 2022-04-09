import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-title-container">
        <div className="navigation-title-1">JOURNEY</div>
        <div className="navigation-title-2">
          Smart Account Openings
          <span>
            <i class="fa-solid fa-sort-down"></i>
          </span>
        </div>
      </div>
      <div className="navigation-menu-container">
        <div className="profile-options">
          <div className="profile-image">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt="Avatar"
            />
          </div>
          <h3>Ricardo Chuan</h3>
          <i class="fa-solid fa-chevron-down"></i>
          <i class="fa-solid fa-bell"></i>
        </div>
        <hr />
        <div className="navigation-options">
          <ul>
            <li className="navigation-option-item">
              <i class="fa-solid fa-book"></i>Overview
            </li>
            <li className="navigation-option-item">
              <i class="fa-solid fa-bezier-curve"></i>Channels
            </li>
            <li className="navigation-option-item">
              <i class="fa-solid fa-handshake"></i>Partners
            </li>
            <li className="navigation-option-item">
              <i class="fa-solid fa-laptop-code"></i>API's
            </li>
            <li className="navigation-option-item">
              <i class="fa-solid fa-gears"></i>Integrations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

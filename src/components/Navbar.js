import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Laura Segoura's Portfolio
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                sobre Mim
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Objetivos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Experiência
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

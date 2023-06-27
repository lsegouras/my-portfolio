import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (

<Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#home">Portfolio de Laura Segouras</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="nav">
            <Nav.Link className="nav-link" href="#Sobre Mim">Sobre Mim</Nav.Link>
            <Nav.Link className="nav-link" href="#Objetivos">Objetivos</Nav.Link>
            <Nav.Link className="nav-link" href="#Experiência">Experiência</Nav.Link>
            <Nav.Link className="nav-link" href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-link" href="Contatos">Contatos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





//     <nav className='navbar navbar-expand-lg navbar-light'>
//       <div className='container'>
//         <a className='navbar-brand' href='#'>
//           Laura Segoura's Portfolio
//         </a>
//         <button
//           className='navbar-toggler'
//           type='button'
//           data-toggle='collapse'
//           data-target='#navbarSupportedContent'
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <span className='navbar-toggler-icon'></span>
//         </button>

//         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//           <ul className='navbar-nav ms-auto'>
//             <li className='nav-item active'>
//               <a className='nav-link' href='#'>
//                 sobre Mim
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Objetivos
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Experiência
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Portfolio
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Contatos
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Menu;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/navbar.css" 

export class Navegacion extends Component {
  render() {
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-aqua">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img id="imagencabecera" src="https://i.ibb.co/NWzzgnC/Icon.png"
          /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>                
                <li className="nav-item">
                <Link className="nav-link" to="/listar">
                  CONSULTAS
                  </Link>
                </li>
                <li className="nav-item">
                <Link className= "nav-link" to="/crear">
                  MIS LIBROS
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/crearUsuario">
                  Crear Usuario
                </Link>
                </li>
              </ul>
            </div>
          </div>
  </nav>
    );
  }
}

export default Navegacion
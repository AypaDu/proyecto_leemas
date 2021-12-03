import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Principal.css";

export class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div class="container">
          <div class="row text-center">
            <div class="col-12 col-lg">
              <p id="Frase">
                “Qué maravilloso es que nadie necesita un solo momento antes de comenzar a mejorar el mundo”
              </p>
            </div>
            <div class="col-12 col-lg">
              <img src="https://i.ibb.co/bgQ92wP/Libro.png" id="Librito"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

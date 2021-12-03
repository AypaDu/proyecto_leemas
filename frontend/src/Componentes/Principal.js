import React, { Component } from 'react';
import "../Styles/Principal.css";

export class Principal extends Component {
    render() {
        return (
        <div>
            <div>
                <img id= "ImgBanner" src='https://i.ibb.co/RbKNST9/Banner.png'
                />
                <div id="TextProy">
                <h2 id="TitleH2">
                    PROYECTO LEEMAS
                </h2>
                <p>
                Está pagina se realizó para las personas interesadas en conectar con otras con
                el fin de compartir sus libros, lo que no solo deseará contribuir al
                disminuir el consumo de nuevas páginas, sino que dará acceso a los 
                usuarios para compartir libros de una manera ágil. Inicialmente este proyecto permite hacer el registro de todos
                aquellos libros que el usuario desee compartir.
                </p>
            </div>

            <div id="Cards">
                <h2 id="H2Cards">
                    OBRAS LITERARIAS
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/wW2dsCz/L1.png" className="card-img-top" alt="L1"/>
                        <div className="card-body">
                            <h5 className="card-title">Don Quijote de la Mancha</h5>
                            <p className="card-text">Una novela protagonizada por un caballero que no lo es, que ayuda con la mejor de su voluntad a los más desfavorecidos, y los defiende en batallas que no existen. Dejándose llevar por la fantasía, muchos lo tachan de loco, pero…. las personas lo suficientemente locas para pensar que pueden cambiar el mundo, son las que lo cambian…</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/vsrK2TP/L2.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">El famoso cohete</h5>
                            <p className="card-text">El hijo del rey estaba en vísperas de casarse. Con este motivo el regocijo era general. Estuvo esperando un año entero a su prometida, y al fin llegó ésta.

                            Era una princesa rusa que había hecho el viaje desde Finlandia en un trineo tirado por seis renos, que tenía la forma de un gran cisne de oro; la princesita iba acostada entre las alas del cisne...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/TwXs6hw/L3.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Orgullo y prejuicio</h5>
                            <p className="card-text">Nos mostrará cómo era la vida de la burguesía inglesa del siglo XIX, desde la perspectiva de dos familias muy distintas y desde una historia muy peculiar.

                                La novela nos enseña cómo en esta época,las relaciones personales podían ser mezquinas, pues su principal motivación era la riqueza y el status social.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/xYZ7WX8/L4.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">El Spleen de Paris</h5>
                            <p className="card-text">Es un conjunto de poemas publicado en 1869, pequeños poemas en prosa. Durante esta época Baudelaire camina por las calles de París y nutre de esta manera su legado con poemas innovadores que relatan cómo lo sombrío puede llegar a ser objeto de la estética en la poesía.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/7vbMfBJ/L5.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">El Criterio</h5>
                            <p className="card-text">Se trata, pues, de un método original y, en sus líneas esenciales, indispensable para aprender a pensar bien, o sea, para ejercitar la actividad intelectual, que conviene en orden a conocer la verdad o a dirigir el entendimiento por el camino que conduce a ella.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="CardDesing">
                        <img id="ImgLibros" src="https://i.ibb.co/bB4LYhg/L6.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">El arte de la guerra</h5>
                            <p className="card-text">Escrito por el General y gran estratega militar Sun Tzu en la antigua China es uno de los libros más leídos de toda la historia, y aunque hayan pasado unos 2500 años desde su escritura, sus principios y consejos pueden ser aplicados al ámbito militar, político, empresarial e individual de la actualidad.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="footerd" class="pb-2 pt-4">
            <div>
                <h2 id="TitleH2">
                    Equipo de desarrollo
                </h2>
            </div>
            <div class="container">
                <div class="row text-center">
                    <div class="col-12 col-lg">
                    <img src="https://i.ibb.co/Qv3qWNZ/Aura.png" id="ImgFooter"/>
                    <p><b>Aura Maria Duque</b></p>
                    <p>Developer</p>
                </div>
                <div class="col-12 col-lg">
                    <img src="https://i.ibb.co/S3PtFbc/Mafe.png" id="ImgFooter"/>
                    <p><b>Maria Fernanda Beltran</b></p>
                    <p>Developer</p>
                </div>
                <div class="col-12 col-lg">
                    <img src="https://i.ibb.co/QDBcmdJ/Jeremy.png" id="ImgFooter"/>
                    <p><b>Jeremy Perdomo</b></p>
                    <p>Developer</p>
                </div>
                <div class="col-12 col-lg">
                    <img src="https://i.ibb.co/1XrNVr8/Gloria.png" id="ImgFooter"/>
                    <p><b>Gloria Martinez</b></p>
                    <p>Backend</p>
                </div>
                <div class="col-12 col-lg">
                    <img src="https://i.ibb.co/wSCn0kk/Rosa.png" id="ImgFooter"/>
                    <p><b>Rosa Elena Arévalo</b></p>
                    <p>Frontend</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Principal

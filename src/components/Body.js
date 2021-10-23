import React from 'react';

function Navbar() {
    const [isActive, setisActive] = React.useState(false)
    
    return (
        <div>
            <div className="image is-full">
                <figure className="image is-3by1">
                    <img src="https://bulma.io/images/placeholders/1280x960.png"/>
                </figure>
            </div>
            <br/><br/><br/>
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading is-size-4">Años de experiencia</p>
                    <p className="title">+6</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading is-size-4">Participacion en proyectos</p>
                    <p className="title">30</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading is-size-4">Proyectos Dirigidos</p>
                    <p className="title">10</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading is-size-4">Certificaciones</p>
                    <p className="title">1</p>
                    </div>
                </div>
                </nav>
            <br/><hr/>
            <div className="container">
                <div className="content columns is-centered">
                    <div className="column is-one-fifth">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Albert González</p>
                                        <p className="subtitle is-6">@albertGlezDev</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Universidad de Colima - ISC<br/>
                                    2012 - 2016
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div class="content">
                            <h1>Hello World</h1>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}
export default Navbar;
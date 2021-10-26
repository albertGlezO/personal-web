import React from 'react';

function Navbar() {
    const [isActive, setisActive] = React.useState(false)
    
    return (
        <div>
            <div className="image is-fullwidth">
                <figure className="image is-3by1">
                    <img src="https://bulma.io/images/placeholders/1280x960.png"/>
                </figure>
            </div>
            <br/>
            <div className="container">
                <div className="columns">
                    <div className="column content">
                        <center><h1>Biography</h1></center>
                    </div>
                </div>
                <hr/>
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
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="columns">
                    <div className="column content">
                        <center><h1>Experience</h1></center>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                </div>
            </div>
            <br/>
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
            </nav>
            <br/><br/>
            <div className="container">
                <div className="columns">
                    <div className="column content">
                        <center><h1>Skills</h1></center>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="15" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="30" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="25" max="100">15%</progress>
                    </div>
                </div>
                <br/>
                <div className="columns">
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="30" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="10" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="50" max="100">15%</progress>
                    </div>
                </div>
                <br/>
                <div className="columns">
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="60" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="40" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="20" max="100">15%</progress>
                    </div>
                </div>
                <br/>
                <div className="columns">
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="35" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="90" max="100">15%</progress>
                    </div>
                    <div className="column">
                        Example
                        <progress className="progress is-danger" value="40" max="100">15%</progress>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="container">
                <div className="columns">
                    <div className="column content">
                        <center><h1>Blog</h1></center>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                                </div>

                                <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br/>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                                </div>

                                <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br/>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                                </div>

                                <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br/>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                                </div>

                                <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br/>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}
export default Navbar;
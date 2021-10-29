import React from 'react';

function Biography() {
    return (
        <div className="container mb-6" id="biography">
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
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
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
                    <div className="content">
                        <p>Lorem ipsum<sup><a href="#!">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        <p>Lorem ipsum<sup><a href="#!">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        <p>Lorem ipsum<sup><a href="#!">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        <p>Lorem ipsum<sup><a href="#!">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        <p>Lorem ipsum<sup><a href="#!">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Biography;
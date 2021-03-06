import React from 'react';

import ExperienceDetail from './ExperienceDetail';

function Experience() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <div className="mb-6">
            <div className="container">
                <div className="columns" id="experience">
                    <div className="column content">
                        <center><h1>Experience</h1></center>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-128x128" onClick={() => {setisActive(!isActive)}}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"/>
                        </figure>
                    </div>
                </div>
            </div>
            <br/>
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading is-size-4">A??os de experiencia</p>
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
            <ExperienceDetail isActive={isActive} setisActive={setisActive}/>
        </div>
    );
}

export default Experience;
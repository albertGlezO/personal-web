import React from 'react';

function Skills() {
    return (
        <div className="container mb-6">
            <div className="columns" id="skills">
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
    );
}
export default Skills;
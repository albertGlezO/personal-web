import React from 'react';

function ExperienceDetail(props) {
    let isActive = props.isActive;
    let setisActive = props.setisActive;

    return (
        <div className={`modal ${isActive ? 'modal is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="delete" aria-label="close" onClick={() => {setisActive(!isActive)}}></button>
                </header>
                <section className="modal-card-body">
                    
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => {setisActive(!isActive)}}>Aceptar</button>
                </footer>
            </div>
        </div>
    );
}

export default ExperienceDetail;
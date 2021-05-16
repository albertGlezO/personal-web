import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer has-background-danger">
            <div className="content has-text-centered">
                <div className="columns">
                    <div className="column is-offset-4 is-1">
                        <a href="https://mx.linkedin.com/in/albertgonzalezochoa" className="has-text-white" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
                    </div>
                    <div className="column is-1">
                        <a href="https://github.com/albertGlezO" className="has-text-white" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                    </div>
                    <div className="column is-1">
                        <a href="#!" className="has-text-white"><i className="fab fa-whatsapp fa-3x"></i></a>
                    </div>
                    <div className="column is-1">
                        <a href="#!" className="has-text-white"><i className="fab fa-telegram fa-3x"></i></a>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <h3 className="has-text-white">Copyright</h3>
                    </div>
                    <div className="column">
                        <h3 className="has-text-white">Location</h3>
                    </div>
                    <div className="column">
                        <h3 className="has-text-white">About</h3>
                    </div>
                </div>
                <div className="columns has-text-white">
                    <div className="column">Albert Alejandro González Ochoa <i className="far fa-copyright"></i> 2021</div>
                    <div className="column">Some where in Colima, México.</div>
                    <div className="column">
                        This site is my personal web page, here you find my information of my biography, experience, and my post in blog aboute interstinc topics of tecnologies
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
import { useState } from 'react';
import logo from '../../assets/logo.png';

import './Menu.css';

const Menu = () => {
    const [show, setShow] = useState("hidden");

    const showCategorys = () => {
        show === "hidden"? setShow("show") : setShow("hidden");
    }

    return (
        <>
            <div className="navbar-container">
                <header className="header">
                    <nav className="navbar">
                        <div className="navbar__category-container">
                            <i onClick={showCategorys} className="bi bi-list"></i>
                        </div>
                        <div className="navbar__logo-container">
                            <img className="logo-image" src={logo} alt=""/>
                        </div>
                    </nav>
                </header>
                <div className={`category-droopdown ${show}`}>
                    <ul className="category-list">
                        <li className="category-item">
                            <h1>
                                Mi Librería
                            </h1>
                            <ul>
                                <li>
                                    <a href="/">Recientes</a>
                                </li>
                                <li>
                                    <a href="/">Artistas</a>
                                </li>
                                <li>
                                    <a href="/">Álbums</a>
                                </li>
                                <li>
                                    <a href="/">Canciones</a>
                                </li>
                                <li>
                                    <a href="/">Estaciones</a>
                                </li>
                            </ul>
                        </li>
                        <li className="category-item">
                            <h1>
                                Playlist
                            </h1>
                            <ul>
                                <li>
                                    <a href="/">Metal</a>
                                </li>
                                <li>
                                    <a href="/">Para bailar</a>
                                </li>
                                <li>
                                    <a href="/">Rock 90s</a>
                                </li>
                                <li>
                                    <a href="/">Baladas</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Menu;

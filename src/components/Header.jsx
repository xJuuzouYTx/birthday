import React, { useState } from 'react';
import '@styles/Header.scss';

const Header = () => {

    const [mode, setMode] = useState('');
    const [tdnn, setTdnn] = useState('');

    return (
        <nav className='Header'>
            <div className="Header-left">
                <img src="https://sites.google.com/a/sinova.co/repositorio/nuevas/Logo%20Azul%20HD-03.png" alt="logo" className="Header-logo" />
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/spreadsheets/d/122GUIt_Z13bmaNtXMBvatOq25cQsZZwiMw_9i5vCLAI/edit#gid=0" target="_blank">Configuración</a>
                    </li>

                </ul>
            </div>
            <div className="Header-right">
                <ul>
                    <li className={`tdnn ${tdnn}`} onClick={() => {
                        setMode(mode == '' ? 'sun' : '');
                        setTdnn(tdnn == '' ? 'day' : '');
                    }}>
                        <div className={`moon ${mode}`}></div>
                    </li>
                </ul>
            </div>
            <div className="Header-right">
                <ul>
                    <li className="Header-email">Hugo Gonzalez</li>
                    <li className="Header-user-active">
                        <img src="https://lh3.googleusercontent.com/-9dRXWB-v4gs/Xxs5dCtDNHI/AAAAAAAAAWs/O4rTKicZrAgkhU8pzOmoQX_mi7GDuOlAACK8BGAsYHg/s0/2020-07-24.png" alt="Usuario activo" />
                        <div />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
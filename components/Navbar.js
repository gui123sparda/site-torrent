import React from 'react'

export default function Navbar(){
    return(
        <div className="navbar">    
            <a href="/">Home</a>
            <div className="dropdown">  
                <button className="dropbtn">Jogos</button>
                <div className="dropdown-content">
                    <a href="/games/pc">PC</a>
                    <a href="#">Emuladores</a>
                    <a href="#">Roms</a>

                </div>
            </div>
            <a href="/about">Sobre</a>

        </div>

    );
}
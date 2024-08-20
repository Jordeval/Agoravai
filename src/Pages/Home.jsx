import React from 'react';
import './Home.css';
import Logo from '../assets/img/tech-cell.jpg'; 
import Instagram from '../assets/img/instagran.jpg'; 
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.jpeg';

const Home = () => {
    return (
        <div className='header-text'>
            <div className='header-logo'>
                <img className='logo' src={Logo} alt="Tech Cell Logo" />
                <div className='header'>
                    <h3>Endereço: Rua 11, Nº174 - Vila Pai Eterno, Trindade - GO, 75380-000</h3>
                    <h3>Telefone: (62) 98627-3098</h3>
                </div>
                <div className='images'>
                    <a href="" target="_blank">
                    <img src={Instagram} alt="Ícone do Instagram" className='additional-image' />
                    </a>
                    <a href="https://pt-br.facebook.com/techcelltrindade" target="_blank">
                    <img src={Facebook} alt="Ícone do Facebook" className='additional-image' />
                    </a>
                    <a href="" target="_blank">
                    <img src={Twitter} alt="Ícone do Twitter" className='additional-image' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;

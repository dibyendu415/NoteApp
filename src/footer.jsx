import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return <>
        <footer>
            <h5>Made by Dibyendu Maji</h5>
            <p>Copyrights @ {year} </p>
        </footer>
    </>
};

export default Footer;
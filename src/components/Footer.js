import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../scss/Footer.scss';

export const Footer = () => {
    let date = new Date();
    let year = date.getUTCFullYear();
    return (
        <footer>
            <span>&copy; {year} Breakout Logic LLC</span>
            <a target="_blank" href="https://github.com/breakoutlogic"><FontAwesome name="github" /> GitHub</a>
            <a target="_blank" href="https://breakoutlogic.freshdesk.com"><FontAwesome name="ticket" /> Support</a>
            <a target="_blank" href="https://breakoutlogic.freshdesk.com"><FontAwesome name="book" /> Knowledgebase</a>
        </footer>
    )
    
    
    
}
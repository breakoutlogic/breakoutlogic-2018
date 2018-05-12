import React from 'react';
import { sitemap } from '../utils/sitemap';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../scss/Nav.scss';

const NavElement = ({location}) => {
        
    const sitemapKeys = Object.keys(sitemap);
    
    return (
        <nav className="nav-main">
            <ul>
                {sitemapKeys.map(key => {
                 return sitemap[key].enumerable && (
                    <li key={key} className={location.pathname === sitemap[key].path ? 'active' : ''}>
                        <NavLink exact strict={false} to={sitemap[key].path}>{sitemap[key].title}</NavLink>
                    </li>
                 );                
                })}
            </ul>
        </nav>
    );

}

export const Nav = withRouter(NavElement);
import React from 'react';
import { SITE_TITLE } from '../utils/constants';
import { sitemap } from '../utils/sitemap';
import { Link, Switch, Route } from 'react-router-dom';
import '../scss/Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="icon">
                <Switch>
                    <Route exact path={sitemap.ABOUT.path} component={sitemap.ABOUT.icon} />
                    <Route strict={false} path={sitemap.EXPERTISE.path} component={sitemap.EXPERTISE.icon} />
                    <Route strict={false} path={sitemap.CONTACT.path} component={sitemap.CONTACT.icon} />
                    <Route component={sitemap.NOTFOUND.icon} />
                </Switch>
            </div>
            <Link to="/">
                <h1>{SITE_TITLE}</h1>
            </Link>
        </header>
    );
}
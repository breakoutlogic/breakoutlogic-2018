import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { sitemap } from '../utils/sitemap';
import { Background } from './Background';
import { Header } from './Header';
import { Nav } from './Nav';
import { About } from './About';
import { Expertise } from './Expertise';
import { Contact } from './Contact';
import { NotFound } from './NotFound';
import { Footer } from './Footer';
import '../scss/App.scss';
import '../.htaccess';

export class App extends React.Component {
    
    render() {
        
        return (
            <div>
                <Background />
                <Router>            
                    <div className="wrap">
                        <Header />
                        <div className="body">
                            <Nav />
                            <section className="main">
                                <Switch>
                                    <Route exact path={sitemap.ABOUT.path} component={About} />
                                    <Route strict={false} path={sitemap.EXPERTISE.path} component={Expertise} />
                                    <Route strict={false} path={sitemap.CONTACT.path} component={Contact} />
                                    <Route component={NotFound} />
                                </Switch>
                            </section>
                        </div>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
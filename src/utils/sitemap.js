import React from 'react';
import About from '../snippets/about';
import Expertise from '../snippets/expertise';
import Contact from '../snippets/contact';
import NotFound from '../snippets/not-found';
import FontAwesome from 'react-fontawesome';

export const sitemap = {
    
    ABOUT: {
        title: 'About',
        path: '/',
        content: About,
        icon: () => <FontAwesome name='cubes' />,
        enumerable: true
    },
    
    EXPERTISE: {
        title: 'Expertise',
        path: '/expertise',
        content: Expertise,
        icon: () => <FontAwesome name='lightbulb-o' />,
        enumerable: true
    },
    
    CONTACT: {
        title: 'Contact',
        path: '/contact',
        content: Contact,
        icon: () => <FontAwesome name='comments-o' />,
        enumerable: true
    },
    
    NOTFOUND: {
        title: 'Not Found',
        content: NotFound,
        icon: () => <FontAwesome name='meh-o' />,
        enumerable: false
    }
}
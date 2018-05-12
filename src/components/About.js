import React from 'react';
import { Page } from './Page';
import { sitemap } from '../utils/sitemap';

export const About = () => <Page title={sitemap.ABOUT.title}>{sitemap.ABOUT.content}</Page>;
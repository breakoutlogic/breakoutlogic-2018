import React from 'react';
import { Page } from './Page';
import { sitemap } from '../utils/sitemap';

export const Contact = () => <Page title={sitemap.CONTACT.title}>{sitemap.CONTACT.content}</Page>;
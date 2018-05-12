import React from 'react';
import { Page } from './Page';
import { sitemap } from '../utils/sitemap';

export const NotFound = () => <Page title={sitemap.NOTFOUND.title}>{sitemap.NOTFOUND.content}</Page>;
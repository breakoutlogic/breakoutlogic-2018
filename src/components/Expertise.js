import React from 'react';
import { Page } from './Page';
import { sitemap } from '../utils/sitemap';

export const Expertise = () => <Page title={sitemap.EXPERTISE.title}>{sitemap.EXPERTISE.content}</Page>;
import { SITE_TITLE } from './constants';

export const setTitle = (newTitle) => {
    document.title = newTitle ? `${SITE_TITLE} | ${newTitle}` : SITE_TITLE;
}
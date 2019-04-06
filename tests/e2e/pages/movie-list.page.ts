import { element, browser, by, Key } from 'protractor';

export class MovieListPage {

    getPage() {
        return browser.get('/');
    }

    getPageTitle() {
        return browser.getTitle();
    }
}

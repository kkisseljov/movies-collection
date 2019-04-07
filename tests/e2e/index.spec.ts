import { by, browser, element } from 'protractor';
import { MovieListPage } from './pages/movie-list.page';

describe('TEST', () => {

    const movieListPage = new MovieListPage();

    describe('title check', () => {
        beforeAll(() => {
            movieListPage.getPage();
        });

        it('should have right title', async () => {
           const title = await movieListPage.getPageTitle();
           expect(title).toEqual('blalba');
        });
    });
});

import { IMovieListFilters } from './interfaces';
import { GenreType } from '../../../api/movies/movie.model';

//TODO Maybe turn this into a class ?. Params can be mapped in a variable.

export function filtersToUrlParams(filters: IMovieListFilters): string {
    if (!filters) {
        return '';
    }

    const params = [];
    if (filters.byName) {
        params.push('name=' + filters.byName);
    }

    if (filters.byGenre && filters.byGenre.length) {
        params.push(
            filters.byGenre
                .map((genre) => 'genres[]=' + genre)
                .join('&')
        );
    }

    // If we don't encode it here, redux will do it for us, but an extra UPDATE_LOCATION action will be fired.
    // This is something I would like to avoid, so encoding it in advance.
    return encodeURI(
        params.length
            ? '?' + params.join('&')
            : ''
    );
}

export function filtersFromUrl(url: string): IMovieListFilters {
    url = decodeURI(url);

    if (!url.includes('?')) {
        return {byName: null, byGenre: []};
    }

    const params = url.substring(1).split('&');
    const nameParam = 'name=';
    const genreParam = 'genres[]=';

    const filters = {
        byName: null,
        byGenre: [],
    } as IMovieListFilters;

    params.forEach((param) => {
        if (param.includes(nameParam)) {
            filters.byName = param.substring(nameParam.length);
        }

        if (param.includes(genreParam)) {
            filters.byGenre.push(param.substring(genreParam.length) as GenreType)
        }
    });

    return filters;
}

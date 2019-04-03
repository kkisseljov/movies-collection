import { IMovieListFilters } from './interfaces';
import { GenreType } from '../../../api/movies/movie.model';

export function filtersToUrlParams(filters: IMovieListFilters): string {
    if(!filters) {
        return '';
    }

    let params = [];
    if(filters.byName) {
        params.push('name=' + filters.byName);
    }

    if(filters.byGenre && filters.byGenre.length) {
        params.push(
            filters.byGenre
                .map((genre) => 'genres[]=' + genre)
                .join('&')
        );
    }

    return params.length ? '?' + params.join('&') : '';
}

export function filtersFromUrl(url: string): IMovieListFilters {
    url = decodeURI(url);

    if(!url.includes('?')) {
        return { byName: null, byGenre: []};
    }

    const params = url.substring(1).split('&');

    let filters = {
        byName: null,
        byGenre: [],
    } as IMovieListFilters;

    params.forEach((param) => {
        if(param.includes('name=')) {
            filters.byName = param.substring(5);
        }

        if(param.includes('genres[]=')) {
            filters.byGenre.push(param.substring(9) as GenreType)
        }
    });

    return filters;
}

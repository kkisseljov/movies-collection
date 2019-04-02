export type GenreType = "action" | "adventure" | "biography" | "comedy" | "crime"
	| "drama" | "history" | "mystery" | "scifi" | "sport" | "thriller";

export const genreType = {
	action: "action" as GenreType,
	adventure: "adventure" as GenreType,
	biography: "biography" as GenreType,
	comedy: "comedy" as GenreType,
	crime: "crime" as GenreType,
	drama: "drama" as GenreType,
	history: "history" as GenreType,
	mystery: "mystery" as GenreType,
	scifi: "scifi" as GenreType,
	sport: "sport" as GenreType,
	thriller: "thriller" as GenreType
};

export const MOVIE_IMAGES_PATH = 'assets/images/movie-covers/';

export interface IMovie {
  id: number;
  key: string;
  name: string;
  description?: string;
  genres?: GenreType[],
  rate?: string;
  length?: string;
  img?: string;
}

export class Movie implements IMovie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: GenreType[];
    rate: string;
    length: string;
    img: string;

    constructor(data: IMovie) {
        this.id = data.id;
        this.name = data.name;
        this.key = data.key;
        this.description = data.description;
        this.genres = data.genres;
        this.rate = data.rate;
        this.length = data.length;
        this.img = data.img;
    }

    getImagePath() {
        return MOVIE_IMAGES_PATH + this.img;
    }

    getGenresText() {
        return this.genres.join(', ');
    }
}

# Installation and launch #

Install `node` and `npm` (I used `nvm` for that).

Cd into `movies-collection` folder and run `npm i`.

To launch the project run `npm start`

Open http://localhost:4200 in your browser ( I tested only on Chrome )

## Project details

Used https://github.com/angular-redux/example-app as a starter.

Contains two pages:
- **Movie list** - has a search bar on top, that looks for matching movie name, and filter by genres. List is paginated and fetched using infinite scroll. Clicking on a movie redirects to movie-detail page.
- **Movie detail** - shows movie details, which is fetched using id provided as a route parameter. Has a button to return back to movie list.

There is an error notifier that shows up when providing wrong id for movie detail page

## Folder structure

**/src/app/api** - contains api service and models

**/src/app/core** - contains components common to entire project, which might be reused in many different places

**/src/app/pages** - contains page components and different other content, such as store related files and other components, relevant only to some particular page.

**/src/app/store** - global store

**/src/sass** - all styles for the project, separated by components, are located here

**/tests** - all tests are located here. Unit and E2E are in different folders

## Running tests

Run `npm run test` for unit tests. ( Not implemented yet, but karma is set up correctly ).

Run `npm run e2e` for end-to-end tests. ( Not working atm, stuck with tsconfig issues ).

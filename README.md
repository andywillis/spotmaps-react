# vite-react-express-boilerplate

## Introduction

A vite/React/Express boilerplate that can be deployed to Heroku. It uses yarn workspacing.

- Key dependencies

	- vite/vitest
	- Express HTTPS server - you'll need to generate your pem files (details are in the text file in `packages/server/auth`)
	- React 17.0.2
	- react-router

- Key development dependencies
	- AirBnb eslint/react linting libraries

## Installation

- Install yarn
- Clone the repo
- Rename the cloned repo
- `cd` to the folder

`yarn`
`yarn run dev`

- Update the `.code.workspace`, `package.json` files to match your app namefs
- Update the `packages/client/.env` file to match your site name

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
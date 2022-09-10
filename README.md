
# Installing the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the frontend and [Express JS](https://expressjs.com/) for the backend.

You need to run `npm install` to make sure that all packages are installed before running the project.

# Running the project

* `npm start` will run the frontend (on port `3000`)
* `npm run start-server` will run the backend (on port `3001`)

There is a middleware that will have the backend run on port `3000`, under `/api/*`, so no cross-origin requests are needed.

# Running the tests

* `npm test` - launches the test runner in the interactive watch mode (you can read more about running tests in the [official CRA documentation](https://facebook.github.io/create-react-app/docs/running-tests))
* `npm test -- --coverage` will report on the test coverage

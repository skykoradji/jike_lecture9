import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './router';

// const item = new Object();
// console.log(item);

const App = () => (
  <Fragment>
    <AppRouter />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
 * Progressive web apps that have been added to the homescreen
 * will load faster and work offline when there's an active service worker.
 */

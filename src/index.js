import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import genres from './genres.json';

ReactDOM.render(<App genres={genres} />, document.getElementById('root'));

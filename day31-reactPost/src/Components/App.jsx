import React from 'react';
import MovieReview from './MovieReview.jsx';

export default class App extends React.Component {
    render() {
        return (
            <main>
            <h1>The App component</h1>
            <MovieReview />
            </main>
        )
    }
}
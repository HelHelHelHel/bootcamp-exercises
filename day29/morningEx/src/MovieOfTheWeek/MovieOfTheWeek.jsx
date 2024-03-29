import React from 'react';

export default class MovieOfTheWeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = 'http://www.laravel.test:8080//api/movieOfWeek';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <div className="movie">

                        <img src={this.state.data.movies.poster_url} alt="Venom" />

                        <div>

                            <h3>{this.state.data.movies.name}</h3>

                            <div className="year">{this.state.data.movies.year}</div>

                            <div className="genres">
                                {
                                    this.state.data.genres.map(item => (
                                        <span>{item}</span>
                                    ))
                                }

                            </div>

                            <div className="starring">
                                <h4>Starring:</h4>

                                <div>
                                    {
                                        this.state.data.people.map(item2 => (
                                            <span>{item2}</span>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            )
        }

        return (
            <section className="weekly-movie">

                <h2>Movie of the week</h2>

                {content}

            </section>
        );
    }
}
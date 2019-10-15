import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <h2>{this.props.name}</h2>
                <img src={this.props.image_url}
                alt={this.props.name} />
                <div>{this.props.description}</div>
                <div>{this.props.rating}</div>
                <div>{this.props.released_at}</div>
        
            </div>
        );
    }
}
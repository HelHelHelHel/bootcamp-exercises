import React from 'react';
import './index.scss';

export default class Encyclopedia extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="info__fact">{this.props.fact}</div>
        <div className="info__description">{this.props.description}</div>
      </div>
    );
  }
}

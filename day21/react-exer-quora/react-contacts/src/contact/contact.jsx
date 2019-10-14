import React from 'react';
import './index.scss';

export default class Question extends React.Component {
  render() {
    return (
      <div className="quest">
        <div className="quest__type">{this.props.queType}</div>
        <div className="quest__name">{this.props.queName}</div>
        <div className="quest__likes">{this.props.queLikes}</div>
        <div className="quest__answer">{this.props.queAnswer}</div>
      </div>
    );
  }
}

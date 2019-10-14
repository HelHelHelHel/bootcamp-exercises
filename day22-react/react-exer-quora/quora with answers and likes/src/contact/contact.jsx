import React from 'react';
import './index.scss';
import Answer from '../answers/answer.jsx';


export default class Question extends React.Component {
  constructor(props){
    super(props);

    this.state = {selected: false,};
  }

  handleClick = () => {
    this.setState({selected: !this.state.selected});
  }
  
  render() {
  
  
    let qName = 'quest__name';

    if(this.state.selected) {
      qName += ' quest__name--selected';
    }

    return (
      <div className="quest" onClick={this.handleClick}>
        <div className="quest__type">{this.props.queType}</div>
        <div className="quest__name">{this.props.queName}</div>
        <div className="quest__likes">{this.props.queLikes}</div>
        <div className="answers">
        {this.props.answers.map(ans => (
            <Answer
              user={ans.user} 
              text={ans.text}
              likes={ans.likes}
            />
          ))
        }
        </div>
        
      </div>
    );
  }
}

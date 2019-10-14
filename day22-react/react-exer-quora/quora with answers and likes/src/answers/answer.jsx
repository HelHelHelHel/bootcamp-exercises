import React from 'react';
import './index.scss';


export default class Answer extends React.Component {
    constructor(props){
        super(props);

        this.state = {likes: this.props.likes};
    }
    
    handleClick = () => {
        this.setState({likes: this.state.likes + 1});
      }
  
    render() {
        
    return (
        <div className="answer" >
            <div className="user">{this.props.user}</div>
            <p className="text">{this.props.text}</p>
            <div class="likes" onClick={this.handleClick}>{this.state.likes}</div>
        </div>

    );
  }
}

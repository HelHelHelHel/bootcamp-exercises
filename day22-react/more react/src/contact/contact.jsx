import React from 'react';
import './index.scss';


export default class Contact extends React.Component {
    constructor(props) {
      super();
      this.state ={
      age: props.initialAge,
      homeLink: props.homeLink
      };
    }

    onMakeOlder() {
      this.setState ({
        age: this.state.age + 3,
        
      })
    }

    onChangeLink() {
      this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
          homeLink: event.target.value
        });
    }

  render() {
    return (
      <div className="home">
        <p>In a new Component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">make me older</button>  
        <button onClick={this.props.greet}>greet</button>  
        <hr/>
        <input type="text" value= {this.state.homeLink} 
        onChange= {(event) => this.onHandleChange(event)} id=""/>
        <button onClick={this.onChangeLink.bind(this)}>change</button> 
      </div>
    );
  }
}


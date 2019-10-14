import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';
import Header from './contact/header.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Here"
    }
  }
  onGreet() {
    alert('hello');
  }

  onChangeLinkName(newName) {
      this.setState({
        homeLink: newName
      });
  }
  render() {
    return (
      <>
      <Header homeLink = "home"/>
      <Contact 
        
        name={"hel"}
        initialAge = {25}
        greet = {this.onGreet}
        changeLink ={this.onChangeLinkName.bind(this)}
        initialLinkName = {this.state.homeLink}
      />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import Encyclopedia from './contact/contact.jsx';
import './index.scss';
import './index.html';

const info = [
  {fact: 'this is fact',
   description: 'this is description'},
]

class App extends React.Component {
  render() {
    return (
      <>
      {
        info.map(item =>(
           <Encyclopedia 
            fact = {item.fact} 
            description = {item.description}
            />
          ))
      }
     </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

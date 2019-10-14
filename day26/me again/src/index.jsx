import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities 
          url="http://tools/cbp/_php_ex/celebrities/"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

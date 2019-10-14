import React from 'react';
import ReactDOM from 'react-dom';

import Question from './contact/contact.jsx';
import './index.scss';
import './index.html';

const questions = [
  {
    queType: 'weirdness',
    queName: 'Why has Jakub his t-shirt over his nose and mouth?',
    queLikes: 'Liked by 2',
    queAnswer: 'because he does not know better',
  },
  {
    queType: 'overeating',
    queName: 'Does Jakub eats too much chocolate?',
    queLikes: 'Liked by 10',
    queAnswer: 'I think, he does not eat enough chocolate yet.',
  },
  {
    queType: 'investments',
    queName: 'Is Jakub investing wisely?',
    queLikes: 'Liked by 20',
    queAnswer: 'Yes, he is investing with Mintos.',
  },
  {
    queType: 'languages',
    queName: 'Does Jakub speaks German?',
    queLikes: 'Liked by 0',
    queAnswer: 'Nah, freihlich!',
  },
  {
    queType: 'hobbies',
    queName: 'Does Jakub likes Jiu-jitsu?',
    queLikes: 'Liked by 50',
    queAnswer: 'Yes, he likes it and he got a new helmet.',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        {
          questions.map(question => (
            <Question
              queType={question.queType} 
              queName={question.queName}
              queLikes={question.queLikes} 
              queAnswer={question.queAnswer}
            />
          ))
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

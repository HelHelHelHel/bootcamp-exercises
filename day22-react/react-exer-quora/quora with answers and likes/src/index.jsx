import React from 'react';
import ReactDOM from 'react-dom';

import Question from './contact/contact.jsx';
import './index.scss';
import './index.html';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions : [
        {
          queType: 'weirdness',
          queName: 'Why has Jakub his t-shirt over his nose and mouth?',
          queLikes: 'Liked by 2',
          answers: [
              { user: 'dumass',
                text: 'because he thinks its cool',
                likes: 0},
              { user: 'smartypants',
                text: 'I think he knows more than us',
                likes: 0},
              ]
        },
        {
          queType: 'overeating',
          queName: 'Does Jakub eats too much chocolate?',
          queLikes: 'Liked by 10',
          answers: [
              { user: 'he',
                text: 'I like chocolate',
                likes: 0},
              { user: 'me',
                text: 'no comment',
                likes: 2},
          ]
        },
        {
          queType: 'investments',
          queName: 'Is Jakub investing wisely?',
          queLikes: 'Liked by 20',
          answers: [
            { user: 'mm', 
              text: 'dont know',
              likes: 3},
            { user: 'nn',
              text: 'yep',
              likes: 0},
        ],
        },
        {
          queType: 'languages',
          queName: 'Does Jakub speaks German?',
          queLikes: 'Liked by 0',
          answers: [
            { user: 'he',
              text: 'I like chocolate',
              likes: 3},
            { user: 'me',
              text: 'no comment',
              likes: 4},
        ]
        },
        {
          queType: 'hobbies',
          queName: 'Does Jakub likes Jiu-jitsu?',
          queLikes: 'Liked by 50',
          answers:[
              { user: 'mm', 
                text: 'dont know',
                likes: 0},
              { user: 'nn',
                text: 'yep',
                likes: 0},
          ]
        },
      ]
    }
  }

  render() {
    return (
      <>
        {
          this.state.questions.map(question => (
            <Question
              queType={question.queType} 
              queName={question.queName}
              queLikes={question.queLikes} 
              answers = {question.answers}
              
            />
          ))
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

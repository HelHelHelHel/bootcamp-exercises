import React, { Component } from 'react';
import './index.scss';
import './index.html';

import Person from './Person/Person.jsx';



class App extends Component {
    state = {
        persons: [
            { id: 'a1', name: 'Max', age: 28 },
            { id: 'b2', name: 'Manu', age: 29 },
            { id: 'c3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }


    

    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });
    
        const person = {
          ...this.state.persons[personIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;
    
        const persons = [...this.state.persons];
        persons[personIndex] = person;
    
        this.setState( {persons: persons} );
      }
    
      deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
      }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    }

    render() {
        const style = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
        }


        return (
            <div className="App">
                <h1>I am a react app</h1>
                <button style={style} onClick={() => this.togglePersonsHandler()}>Toggle persons</button>



                {persons/* using ternary operator for conditional statements
        { 
            this.state.showPersons === true ?
        <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!!')}
            changed ={this.nameChangedHandler}
            >My hobbies: racing</Person> 
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>: null
        } 
        not recommended as it clutters the return part... */}



            </div>

        );
    }
}

export default App;
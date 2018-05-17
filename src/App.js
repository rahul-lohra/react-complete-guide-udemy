import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preson from './Person/Person'


class App extends Component {
    state = {
        persons: [
            {name: "Rahul", age: '24'}, {name: "Meenu", age: '28'}, {name: "Princy", age: '4'}
        ],
        showPersons : false
    };

    switchNameHandler = (newName) => {
        console.log("button clicked");
        this.setState({
            persons: [
                {name: newName, age: '24'}, {name: "Meenu", age: '30'}, {name: "Princy", age: '4'}
            ]
        })
    };

    nameChangeHandler = (event)=>{
        this.setState({
            persons: [
                {name: "rahul kumar", age: '24'}, {name: event.target.value , age: '30'}, {name: "Princy", age: '4'}
            ]
        })
    };

    toggleHandler = ()=>{
        this.setState({
            showPersons : !this.state.showPersons
        })
    };


    // alternate way to pass data - by using arrow functions but it is inefficient

    render() {

        const inlineStyle = {
            backgroundColor:'white',
            font:'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor:'pointer'
        };

        let persons = null

        if(this.state.showPersons){
            persons = (
                    <div>
                        {
                            this.state.persons.map(person =>{
                                return <Preson name = {person.name} age={person.age}/>
                            })
                        }
                    </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi I am a react app</h1>
                <p>This is really working</p>
                <button
                style={inlineStyle}
                    onClick={this.toggleHandler}> Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;

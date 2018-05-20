import React, {Component} from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Preson from './Person/Person'
import { StyleRoot } from 'radium/lib';


class App extends Component {
    state = {
        persons: [
            {id:'a1', name: "Rahul", age: '24'},
            {id:'a2',name: "Meenu", age: '28'},
            {id:'a3',name: "Princy", age: '4'}
        ],
        showPersons : false
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice() //returns a new list
        //or use this es6 - const persons = [...this.state.persons]; //we have spread operator here
        persons.splice(personIndex,1)
        this.setState({persons:persons})
    };

    nameChangeHandler = (event, personId)=>{

        console.log("personId = "+personId)
        const personIndex = this.state.persons.findIndex(
            p=> {
                return p.id === personId
            }
        );
        console.log("personIndex = "+personIndex)
        const mPerson = {...this.state.persons[personIndex]};

        mPerson.name = event.target.value;

        const mPersons = [...this.state.persons];
        mPersons[personIndex] = mPerson;
        this.setState({persons:mPersons});
    };

    toggleHandler = ()=>{
        this.setState({
            showPersons : !this.state.showPersons
        })
    };


    // alternate way to pass data - by using arrow functions but it is inefficient

    render() {

        const inlineStyle = {
            backgroundColor:'green',
            color:'white',
            font:'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor:'pointer',
        };

        let persons = null

        if(this.state.showPersons){
            persons = (
                    <div>
                        {
                            this.state.persons.map((person,index) =>{
                                return <Preson
                                    name = {person.name}
                                    age={person.age}
                                    click = {()=>this.deletePersonHandler(index)}
                                    key = {person.id}
                                    change={(event) => this.nameChangeHandler(event,person.id)}
                                />
                            })
                        }
                    </div>
            );
            inlineStyle.backgroundColor = 'red'
        }

        let assignedClasses  = []
        if(this.state.persons.length <=2 ){
            assignedClasses.push(classes.red)
        }

        if(this.state.persons.length <=1 ){
            assignedClasses.push(classes.bold)
        }

        return (
                <div className={classes.App}>
                    <h1>Hi I am a react app</h1>
                    <p className = {assignedClasses.join(' ')}>This is really working</p>
                    <button
                    style={inlineStyle}
                    onClick={this.toggleHandler}> Toggle Persons</button>
                    {persons}
                </div>
        );
    }
}

export default App

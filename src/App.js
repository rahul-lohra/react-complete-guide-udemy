import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preson from './Person/Person'


class App extends Component {
    state = {
        persons: [
            {name: "Rahul", age: '24'}, {name: "Meenu", age: '28'}, {name: "Princy", age: '4'}
        ]
    };

    switchNameHandler = () => {
        console.log("button clicked");
        //DONT do this this.state.persons[0] = "Mom"
        this.setState({
            persons: [
                {name: "Mom", age: '24'}, {name: "Meenu", age: '30'}, {name: "Princy", age: '4'}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi I am a react app</h1>
                <p>This is really working</p>
                <button onClick={this.switchNameHandler}> Switch name</button>
                <Preson name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Preson
                    name={this.state.persons[1].name} age={this.state.persons[1].age}
                    click={this.switchNameHandler}>
                    My hobbies : Sleeping</Preson>
                <Preson name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        // const header = React.createElement('h1',null,'this is proper header')
        // // return React.createElement('div',null,'hi','Hi I am a react app !!')
        // return React.createElement('div',{className:'App'},header)
    }
}

export default App;

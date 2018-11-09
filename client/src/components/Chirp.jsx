import React from 'react';
import Input from './Input';
import Timeline from './Timeline';

class Chirp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
               { id: 1, text: 'Hit me on my Nextel Chirp' },
               { id: 2, text: 'This lab is really hard.' },
               { id: 3, text: "I still can't figure it out, but life wont always be like this!!!!!!" }],
            name: '@SirChirpsALOT',           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({text: event.target.value});
    }
    
    makeHeader() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">C H I R P E R</h1>
                    <p class="lead">Hello World!! Welcome to Chirper... the world renowned blogging app!!</p>
                </div>
            </div>
        )
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.text);
        event.preventDefault();
        this.setState({
            chirps: [ 
                ...this.state.chirps,
                { text: this.state.text, key: id, id: this.state.chirps.length + 1 }],
            text: ''
            }
        )
        console.log('current', this.state.text);
    }

    render() {
        return (
            <React.Fragment>
                {this.makeHeader()}

                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    name={this.state.name}
                    value={this.state.text}
                />
                <Timeline name={this.state.name} chirps={this.state.chirps} />
            </React.Fragment>
        )
    }
}

export default Chirp;

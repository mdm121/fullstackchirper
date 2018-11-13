import React from 'react';
import Input from './Input';
import Timeline from './Timeline';

class Chirper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            user: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUser = this.handleUser.bind(this);
    }

    handleChange(event) {
        console.log('text', event.target.value);
        this.setState({text: event.target.value});
    }

    handleUser(event) {
        console.log('user', event.target.value);
        this.setState({user: event.target.value});
    }

    async handleSubmit() {
        try{
            let res = await fetch('/api/chirps', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            this.props.history.replace('/');
        } catch (err) {
            console.log(err);
        }
    }

    makeHeader() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">C H I R P E R</h1>
                    <p className="lead">Hello World!! Welcome to Chirper... the world renowned blogging app!!</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.makeHeader()}

                <Input
                    handleUser={this.handleUser}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    user={this.state.user}
                    text={this.state.text}
                    id={this.state.id}
                />
                <Timeline chirps={this.state.chirps} />
            </React.Fragment>
        )
    }
}

export default Chirper;

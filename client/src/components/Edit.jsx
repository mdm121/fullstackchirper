import React, { Component } from 'react';
import Details from './Details';
import { Link } from 'react-router-dom';
import Input from './Input';

class Edit extends Component {
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
    
    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp = await res.json();
            let user = chirp.user;
            let text = chirp.text;
            this.setState({ text: text, user: user });
            console.log("CURRENT: ", user, text, chirp);

        } catch (e) {
            console.log(e);
        }
    }

    handleChange(event) {
        console.log('text', event.target.value);
        this.setState({text: event.target.value});
    }

    handleUser(event) {
        console.log('user', event.target.value);
        this.setState({user: event.target.value});
    }

    async handleSubmit(e) {
        try{
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            this.props.history.replace(`/api/chirps/${this.props.match.params.id}`);
            console.log("UPDATE: ", user, text, chirp);

        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <React.Fragment>
                <Input
                    handleUser={this.handleUser}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    user={this.state.user}
                    text={this.state.text}
                    id={this.state.id} />

                <div className="d-flex justify-content-center">
                    <div 
                        className="card m-3 d-flex justify-content-center text-align-center" 
                        style={{width: '18rem', textAlign: 'center' }}>
                        <div className="d-flex justify-content-center">
                            <img 
                                className="card-img-top pt-3" 
                                src={require('./IMG_0021.jpg')}
                                alt="Avatar"
                                style={{ height: '200px', width: '150px'}} /></div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.user}</h5>
                            <h6>{this.props.match.params.id}</h6>
                            <p className="card-text">{this.state.text}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link className="btn btn-danger" id="saveEdit" to={`/chirps/${this.props.match.params.id}`} >Cancel</Link>
                            <button 
                                type="button" className="btn btn-success"
                                onClick={() => this.Delete(this.props.match.params.id)}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Edit;
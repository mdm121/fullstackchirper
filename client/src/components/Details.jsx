import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Details extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            user: ''
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp = await res.json();
            let user = chirp.user;
            let text = chirp.text;
            console.log("CURRENT: ", user, text, chirp);
            this.setState({ text: text, user: user });


        } catch (e) {
            console.log(e);
        }
    }

    async Delete(id) {
        try{
            let res = await fetch(`/api/chirps/${id}`, {
                method: 'DELETE'
            });
            console.log(res);
            this.props.history.replace('/');
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <React.Fragment>
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
                            <button type="button" className="btn btn-danger" onClick={() => this.Delete(this.props.match.params.id)}>Delete</button>
                            <Link className="btn btn-primary" id="saveEdit" to={`/chirps/${this.props.match.params.id}/edit`} >Edit</Link>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Details;
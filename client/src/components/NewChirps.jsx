import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        
        <div 
            className="card m-3 d-flex justify-content-center text-align-center" 
            style={{width: '18rem', textAlign: 'center' }}>
            <div className="d-flex justify-content-center">
                <img 
                    className="card-img-top pt-3" 
                    src={require('./IMG_0021.jpg')}
                    alt="Avatar"
                    style={{ height: '200px', width: '150px'}} />
                </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6>{props.id}</h6>
                <p className="card-text">{props.text}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <Link className="btn btn-primary" id="saveEdit" to={`/chirps/${props.id}`} >See Details</Link>
            </div>
        </div>
    )
};
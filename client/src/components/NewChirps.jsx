import React from 'react';
import Avatar from './IMG_0021.JPG';

export default (props) => {
    return (
        
        <div 
            class="card m-3 align-items-center justify-content-center text-align-center" 
            style={{width: '18rem', textAlign: 'center' }}>

            <img 
                class="card-img-top" 
                src={Avatar}
                alt="Avatar"
                style={{ height: '200px', width: '150px'}} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    )
};
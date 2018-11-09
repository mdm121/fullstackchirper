import React from 'react';
import NewChirps from './NewChirps';

export default (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap align-items-center justify-content-around ">
                {props.chirps.map((chirp) => {
                    return <NewChirps name={props.name} id={chirp.id} text={chirp.text} />;
                })}
            </div>
        </React.Fragment>
    );
};
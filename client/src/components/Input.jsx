import React from 'react';

const Input = (props) => {
    return (
        <React.Fragment>
        <form className="">
            <div className="p-3 d-flex justify-content-center">
                <input 
                            type="text"
                            className=""
                            text={props.user}
                            onChange={props.handleUser}
                            className="form-control" id="userInput" aria-describedby="chirpHelp" 
                            placeholder="What's your username?" 
                            style={{ width: '350px'}} />
            </div>
            <div className="d-flex justify-content-center p-3">
                <input 
                            type="text" 
                            text={props.text} 
                            onChange={props.handleChange} 
                            className="form-control" id="textInput" aria-describedby="chirpHelp" 
                            placeholder="Type your chirp here" 
                            style={{ width: '350px'}} />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary p-3" id="submit" onClick={props.handleSubmit}>Chirp It!</button>
            </div>
        </form>
        </React.Fragment>
    );
};

export default Input;
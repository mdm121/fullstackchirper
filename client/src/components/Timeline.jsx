import React from 'react';
import NewChirps from './NewChirps';

class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: []
        }

    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps');
            let data = await res.json();
            let chirps = Object.keys(data).map(chirpID => {
                return {
                    id: chirpID,
                    key: chirpID,
                    user: data[chirpID].user,
                    text: data[chirpID].text
                }
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps });
            console.log(this.state.chirps);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-wrap align-items-center justify-content-around">
                    {this.state.chirps.map((chirp) => {
                        return <NewChirps name={chirp.user} key={chirp.key} id={chirp.id} text={chirp.text} />;
                    })}
                </div>
            </React.Fragment>
        );
    }
};

export default Timeline;
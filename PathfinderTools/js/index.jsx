import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        };
     //   this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
    }

    updateScores() {
        fetch("/api/highscores")
            .then((response) => {
                console.log("repsonse", response)
                return response.json()
            })
            .then((json) => {
                console.log("json", json.scores)

                this.setState((prevState, props) => {
                    return {
                        timeUpdated: json.timeUpdated,
                        scores: json.scores
                    }
                });
            });
    };

    
    componentDidMount() {
        // onload
    };


    render() {
        return <div>
            hello world
        </div>

    }
}

render(<App />, document.getElementById('app'));

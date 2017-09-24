import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        };
        //   this.handleClick = this.handleClick.bind(this);
    };

    //handleClick() {
    //}



    componentDidMount() {
        // onload
        fetch("/api/dungeons")
            .then((response) => {
                console.log("repsonse", response)
                return response.json()
            })
            .then((json) => {
                console.log("json", json)

                this.setState((prevState, props) => {
                    return {
                        dungeons: json,
                    }
                });
            });
    };


    render() {
        if (!this.state.dungeons) {
            return <div>
                loading dungeons....
        </div>
        } else if (this.state.dungeons.length === 0) {
            return <div> No Dungeons yet, go and add one to get started</div>
        }
        else {
            return <div className="row">
                {this.state.dungeons.map((dun, i) => {
                    return <div className="col-sm-6 col-md-4" key={i}>
                        <div className="thumbnail">
                            <img src="http://fillmurray.com/242/200" alt="..." />
                            <div className="caption">
                                <h3>{dun.name}</h3>
                                <p><a href="#" className="btn btn-primary" role="button">Start</a></p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        }
    } // end of render
} //end of class

render(<App />, document.getElementById('app'));

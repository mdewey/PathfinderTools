import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Dungeons from './components/dungeons'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    };
<<<<<<< HEAD

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


=======
  
>>>>>>> routingWithReact
    render() {
       return <Dungeons/>
    } 
} 
render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('app'));

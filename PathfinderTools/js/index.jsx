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
    
   

    render() {
       return <Dungeons/>
    } // end of render
} //end of class

render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('app'));

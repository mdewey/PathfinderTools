import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Dungeons from './components/dungeons'
import SelectedDungeon from './components/selectedDungeon'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    };

    render() {
        return <main>
            <Switch>
                <Route exact path='/' component={Dungeons} />
                <Route exact path='/dungeon/:id/room/:roomId' component={SelectedDungeon} />
            </Switch>
        </main>
    }
}
render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('app'));

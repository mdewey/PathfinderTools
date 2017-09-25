import React from 'react';
import Room from './room'

class SelectedDungeon extends React.Component {

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id, 10)
        const full = props.location.state.selectedDungeon;
        let _data = full || { id };
        this.state = {
            selectedDungeon: _data,
            needToLoadDungeon: !full,
            firstRoom: {}
        };

        //   this.handleClick = this.handleClick.bind(this);
    };

    //handleClick() {
    //}

    loadDungeon() {
        if (this.state.needToLoadDungeon) {
            console.log("loading dungeon", this.state.selectedDungeon.id)
            fetch("/api/dungeons/" + this.state.selectedDungeon.id)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    console.log("json", json)
                    loadRoom(json.startingRoomId)
                    this.setState((prevState, props) => {
                        return {
                            selectedDungeon: json,
                            needToLoadDungeon: false
                        }
                    });
                });
        } else {
            console.log("no need to reload dungeon details")
        }
    }

    loadRoom(id) {
        if (id) {
            fetch("/api/rooms/" + id)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    console.log("json 1", json)
                    this.setState((prevState, props) => {
                        console.log("updating statue")
                        return {
                            firstRoom: json,
                        }
                    });
                });
        } else {
            console.log("no id to load")
        }

    };


    componentDidMount() {
        this.loadDungeon();
        if (this.state.selectedDungeon.startingRoomId) {
            console.log("here")
            this.loadRoom(this.state.selectedDungeon.startingRoomId);
        }
    };


    render() {
        if (this.state.needToLoadDungeon) {
            return <div> loading dungeon....</div>
        }
        else {
            return <section>
                <header>Lets go through the dungeon: {this.state.selectedDungeon.name}</header>
                <Room selectedRoom={this.state.firstRoom} />
            </section>
        }
    } // end of render
} //end of class


module.exports = SelectedDungeon;
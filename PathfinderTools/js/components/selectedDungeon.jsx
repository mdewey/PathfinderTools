import React from 'react';
import Room from './room'

class SelectedDungeon extends React.Component {

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id, 10)
        const roomId = parseInt(props.match.params.roomId, 10);
        const full = props.location.state.selectedDungeon;
        let _data = full || { id };
        this.state = {
            selectedDungeon: _data,
            needToLoadDungeon: !full,
            currentRoom: { id: roomId }
        };
        console.log(['ctor', 'selectedDungoen', this.state ])
    };

 
    componentDidMount() {
        console.log(['selectedDungoen', 'mount', this.state])
    };

    loadNextRoom(roomId) {
        console.log(['selectedDungoen', "loading next room", roomId])
        if (roomId) {
            fetch("/api/rooms/" + roomId)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    console.log(['selectedDungoen', "fetched next room", json])
                    this.setState((prevState, props) => {
                        console.log("updating statue")
                        return {
                            currentRoom: json,
                        }
                    });
                });
        } else {
            console.log("no id to load")
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(['selectedDungoen', 'props', nextProps, this.props, this.state])
        this.loadNextRoom(nextProps.match.params.roomId)
    }



    render() {
        console.log(['selectedDungoen', 'render', this.state])
        if (this.state.needToLoadDungeon) {
            return <div> loading dungeon....</div>
        }
        else {
            return <section>
                <header>Lets go through the dungeon: {this.state.selectedDungeon.name}</header>
                <Room selectedRoom={this.state.currentRoom} dungeon={this.state.selectedDungeon} />
            </section>
        }
    } // end of render
} //end of class


module.exports = SelectedDungeon;
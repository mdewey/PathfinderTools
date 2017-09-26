﻿import React from 'react';
import Room from './room'

class SelectedDungeon extends React.Component {

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id, 10)
        const roomId = parseInt(props.match.params.roomId, 10);
        console.log(['ctor', 'selectedDungoen', this.state, props])

        const full = props.location.state ? props.location.state.selectedDungeon : undefined;
        let _data = full || { id };
        this.state = {
            selectedDungeon: _data,
            needToLoadDungeon: !full,
            currentRoom: { id: roomId }
        };
    };


    componentDidMount() {
        console.log(['selectedDungoen', 'mount', this.state])
        if (this.state.needToLoadDungeon) {
            this.loadDungeon()
        }
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
    loadDungeon() {
        console.log(['selectedDungoen', 'loading  dungeon', this.state])
        fetch('/api/dungeons/' + this.state.selectedDungeon.id)
            .then(resp => resp.json())
            .then(json => {
                console.log(['selectedDungoen', 'fetched  dungeon', json])
                this.setState(() => {
                    return {
                        selectedDungeon: json,
                        needToLoadDungeon: false
                    };
                });
            });
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
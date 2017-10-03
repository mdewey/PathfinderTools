import React from 'react';
import { Link } from 'react-router-dom';

class ManageDungeon extends React.Component {

    constructor(props) {
        super(props);
        console.log(["manage", "ctor", props]);
        this.state = {
            isLoading: false,
            dungeon: props.location.state.dungeon,
            isUpdatingName: false,
            rooms: []
        };
        this.updateName = this.updateName.bind(this)
        this.handNewRoomName = this.handNewRoomName.bind(this)
        this.createRoom = this.createRoom.bind(this)
    };

    handNewRoomName(e) {
        const _name = e.target.value;
        this.setState(() => {
            return {
                newRoomName: _name
            }
        })
    }

    createRoom() {
        fetch('/api/rooms', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name: this.state.newRoomName, dungeonId: this.state.dungeon.id })
            })
            .then(resp => resp.json())
            .then(json => {
                var joined = this.state.rooms.concat(json);
                this.roomName.value =""
                this.setState(() => {
                    return {
                        rooms: joined,
                        newRoomName:""
                    }
                })
    
            }).catch(err => {
                console.log("oops", err)
            })
    }

    updateName(e) {
        const newName = e.target.value;
        console.log(["manage", "updating name", newName])
        this.setState(() => {
            return {
                dungeon: { name: newName, id: this.state.dungeon.id },
                isUpdatingName: true
            }
        }, () => {
            fetch('/api/dungeons/' + this.state.dungeon.id, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name: this.state.dungeon.name, id: this.state.dungeon.id })
            }).then(resp => resp.json())
                .catch(err => {
                    console.log("oops", err)
                })
        })

    }

    componentWillMount() {
        console.log(['manage', 'mount', this.state])
        fetch(`/api/dungeons/${this.state.dungeon.id}/rooms`).then(resp => resp.json())
            .then(json => {
                console.log("rooms, ", json)
                this.setState(() => {
                    return {
                        rooms: json
                    }
                })
            }).catch(err => {
                console.log("err on rooms", err)
            })

    }

    render() {
        console.log(['manage', 'render', this.state])
        return <section>
            <section>
                <input type="text" value={this.state.dungeon.name} onChange={evt => this.updateName(evt)} />
            </section>
            <br />
            <section>
                {this.state.rooms.map((room, i) => {
                    return <div className="col-xs-3" key={i}>
                        <div className="panel panel-default">
                            <div className="panel-heading">{room.name}</div>
                            <div className="panel-body">
                                Panel content
                            </div>
                        </div>
                    </div>
                })}
                <div className="col-xs-3">
                    <div className="panel panel-default" >
                        <div className="panel-heading"></div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-addon">Name</div>
                                    <input type="text" className="form-control" placeholder="" ref={el => this.roomName = el} onChange={evt => this.handNewRoomName(evt)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" value={this.state.newRoomName} onClick={this.createRoom}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    } // end of render
} //end of class


module.exports = ManageDungeon;
import React from 'react';
import { Link } from 'react-router-dom'



class Dungeons extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    };

    componentDidMount() {
        // onload
        fetch("/api/dungeons")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
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
                    return <div className="col-sm-6 col-md-3" key={i}>
                        <Link to={{ pathname: `/dungeon/${dun.id}/room/${dun.startingRoomId}`, state: { selectedDungeon: dun } }} className="btn btn-dungeon">
                            <div className="thumbnail">
                                <img src="http://fillmurray.com/242/200" alt="..." />
                                <div className="caption">
                                    <h3><i className="glyphicon glyphicon-tower right-bump" />{dun.name}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
                <div className="col-sm-6 col-md-3">
                    <Link to={{ pathname: `/dungeon/create` }} className="btn btn-dungeon">
                        <div className="thumbnail">
                            <img src="http://fillmurray.com/242/200" alt="..." />
                            <div className="caption">
                                <h3><i className="glyphicon glyphicon-plus-sign right-bump" />Create New</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        }
    } // end of render
} //end of class


module.exports = Dungeons;
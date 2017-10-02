import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

//Thought I shouldnt have any ajax calls in here
class CreateDungeon extends React.Component {

    constructor(props) {
        super(props);
        console.log(["room", "ctor", props]);
        this.state = {
            isNavigating: false,
            dungeon: {}
        };
        this.createDungeon = this.createDungeon.bind(this)
    };

    redirectToManage() {
        console.log("cllllick")
        this.setState(() => { return { isNavigating: true } })
    }

    updateDungeonName(e) {
        console.log(["create", "updating name", e.target.value])
        this.setState({
            dungeon: { name: e.target.value }
        })
    }

    createDungeon() {
        console.log(["create", "post", this.state.dungeon])
        fetch('/api/dungeons', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.dungeon.name })
        }).then(resp => resp.json())
            .then(json => {
                this.setState(() => {
                    return {
                        dungeon: json,
                        isNavigating:true
                    }
                })
            }).catch(err => {
                console.log("oops", err)
            })
    }

    render() {
        console.log(['create', 'render', this.state])
        if (this.state.isNavigating) {
            return <Redirect to={{
                pathname: `/dungeon/${this.state.dungeon.id}/manage`,
                state: this.state
            }} push={true} />
        } else {
            return <section>
                <div className="jumbotron">
                    <h1>Name your new Adventure</h1>
                    <section className="new-name-container">
                        <div className="input-group">
                            <span className=" input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-tower" /></span>
                            <input onChange={evt => this.updateDungeonName(evt)} type="text" className="form-control" placeholder="Name the story" aria-describedby="basic-addon1" />
                        </div>
                    </section>
                    <p><button onClick={this.createDungeon} className="btn btn-primary btn-lg" href="#" role="button">Create</button></p>
                </div>
            </section>
        }

    } // end of render
} //end of class


module.exports = CreateDungeon;
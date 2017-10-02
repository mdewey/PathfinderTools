import React from 'react';
import { Link } from 'react-router-dom';

class ManageDungeon extends React.Component {

    constructor(props) {
        super(props);
        console.log(["manage", "ctor", props]);
        this.state = {
            isLoading: false,
            dungeon: props.location.state.dungeon
        };
        this.updateName = this.updateName.bind(this)
    };

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
                .then(json => {
                    console.log("back", json)
                }).catch(err => {
                    console.log("oops", err)
                })
        })

    }


    render() {
        console.log(['manage', 'render', this.state])
        return <section>
            <section>
                <input type="text" value={this.state.dungeon.name} onChange={evt => this.updateName(evt)} />
            </section>
        </section>
    } // end of render
} //end of class


module.exports = ManageDungeon;
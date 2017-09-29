import React from 'react';
import { Link } from 'react-router-dom';

class Trap extends React.Component {

    constructor(props) {
        super(props);
        console.log(["trap", "ctor", props]);
        this.state = {
            traps: props.traps,
        };
    };

    componentWillReceiveProps(nextProps) {
        console.log(['trap', 'props', nextProps, this.props, this.state])
        this.setState((p, n) => {
            return {
                traps: nextProps.traps
            }
        })
    }

    render() {

        console.log(['trap', 'render', this.state])
        if (this.state.traps.length === 0) {
            return <span></span>
        } else {
            return <div className="col-md-6">
                {this.state.traps.map((trap, i) => {
                    return <div className="panel panel-warning" key={i}>
                        <div className="panel-heading">
                            <h3 className="panel-title">{trap.name}</h3>
                        </div>
                        <div className="panel-body">
                            <p>
                                {trap.desciption}
                            </p>
                            <p>
                                trigger : {trap.trigger}
                            </p>
                            <p>
                                Perception to see: {trap.perceptionDcToSpot}
                            </p>
                            <p>
                                Save: {trap.saveType} DC {trap.dcToBeat}
                            </p>
                        </div>
                    </div>
                })}
            </div>
        }
    } // end of render
} //end of class


module.exports = Trap;
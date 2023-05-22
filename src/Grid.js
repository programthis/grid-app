import React, {Component} from 'react';
import Widget from "./Widget";

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_user: false
        };
    }

    loginUser() {
        console.log("logging in user...");
        this.setState({current_user: true});
    }

    loadGrid() {
        console.log("loading grid...");
        // TODO create json that is like mongo database to load this data
    }

    saveGrid() {
        console.log("saving grid...");
    }

    render() {
        let current_user = this.state.current_user;
        return (
            <div>
                <div className="topContainer">
                    {
                        current_user ?
                        <div>
                            <button onClick={() => this.loadGrid()}>Load</button>
                            <button onClick={() => this.saveGrid()}>Save</button>
                        </div>
                        :
                        <button onClick={() => this.loginUser()}>Login</button>    
                    }
                </div>
                <div className="grid-stack">
                    <Widget options={{width: "1", height: "1", name: "Luke", background: "#67d967", x_pos: "0", y_pos: "0"}} />
                    <Widget options={{width: "1", height: "1", name: "Leia", background: "#3371cd", x_pos: "1", y_pos: "0"}} />
                    <Widget options={{width: "1", height: "1", name: "Marv", background: "#ebeb5b", x_pos: "2", y_pos: "0"}} />
                    <Widget options={{width: "2", height: "3", name: "Darth", background: "#db2c2c", x_pos: "1", y_pos: "1"}} />
                </div>
            </div>
        );
    }
}
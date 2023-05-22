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
                    <Widget options={{width: "1", height: "2", name: "Luke", background: "#67d967"}} />
                    <Widget options={{width: "1", height: "2", name: "Leia", background: "#3371cd"}} />
                    <Widget options={{width: "1", height: "2", name: "Marv", background: "#ebeb5b"}} />
                    <Widget options={{width: "1", height: "2", name: "Darth", background: "#db2c2c"}} />
                </div>
            </div>
        );
    }
}